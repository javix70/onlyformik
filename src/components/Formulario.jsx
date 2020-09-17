import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
//Schema Validation with Yup
import * as Yup from 'yup'
import TextError from "./TextError"

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: ""
  }
}
const onSubmit = (values) => {
  console.log(values)
}
const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})

const Formulario = () => {
return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <Form >
      <div className="form-group">
        <label htmlFor='name'>Name</label>
        <Field
          type='text'
          id='name'
          name='name'
          className='form-control'
        />
        <ErrorMessage name='name' component={TextError} />
      </div>
      <div className="form-group">
        <label htmlFor='email'>E-mail</label>
        <Field
          type='email'
          id='email'
          name='email'
          className='form-control'
        />
        <ErrorMessage name='email' >
          {errorMsg => <div className="error-message">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="form-group">
        <label htmlFor='channel'>Channel</label>
        <Field
          type='text'
          id='channel'
          name='channel'
          className='form-control '
        />
        <ErrorMessage name='channel' />
      </div>
      <div className="form-group">
        <label htmlFor='comments'>Comments</label>
        <Field
          type='textarea'
          id='comments'
          name='comments'
          className='form-control '
        />
        <ErrorMessage name='comments' />
      </div>
      <div className="form-group">
        <label htmlFor='facebook'>facebook</label>
        <Field
          type='textarea'
          id='facebook'
          name='social.facebook'
          className='form-control '
        />
        <ErrorMessage name='facebook' />
      </div>
      <div className="form-group">
        <label htmlFor='twitter'>twitter</label>
        <Field
          type='textarea'
          id='twitter'
          name='social.twitter'
          className='form-control '
        />
        <ErrorMessage name='twitter' />
      </div>
      <div className="form-group">
        <label htmlFor='address'>Address</label>
        <Field
          name='address'
          className='form-control '
        >
          {
            (props) => {
              console.log("Render Props", props)
              const { field, form, meta } = props
              return <div>
                <input type="text" id='address' {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            }
          }
        </Field>
      </div>
      <button type='submit'>Submit</button>
    </Form>
  </Formik>
  )
}

export default Formulario
