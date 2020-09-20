import React from "react"
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik"
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
  },
  phoneNumbers: ["", ""],
  phNumbers: [""]
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

const validationComments = value => {
  let error
  if (!value) {
    error = "Requerido!"
  }
  return error
}
const Formulario = () => {
return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    // validateOnChange={false} //valida field con onchange
    // validateOnBlur={false} //valida los field con touch
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
          validate={validationComments}
          className='form-control '
        />
        <ErrorMessage name='comments' component={TextError}/>
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
        <label htmlFor='phoneNumbers'>phoneNumbers0</label>
        <Field
          type='textarea'
          id='phoneNumbers'
          name='phoneNumbers[0]'
          className='form-control '
        />
        <ErrorMessage name='phoneNumbers' />
      </div>
      <div className="form-group">
        <label htmlFor='phoneNumbers'>phoneNumbers1</label>
        <Field
          type='textarea'
          id='phoneNumbers'
          name='phoneNumbers[1]'
          className='form-control '
        />
        <ErrorMessage name='phoneNumbers[1]' />
      </div>
      <div className="form-group">
        <label htmlFor='address'>Address</label>
        <FastField
          name='address'
          className='form-control '
        >
          {
            (props) => {
              // console.log("Render")
              
              const { field, form, meta } = props
              return <div>
                <input type="text" id='address' {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            }
          }
        </FastField>
      </div>
      <div className="form-group">
        <label htmlFor='phNumbers'>List of phone numbers</label>
        <FieldArray
          name='phNumbers'
          className='form-control '
        >
          {(fieldArrayProps) => {
              // console.log(fieldArrayProps)
              const {form, push, remove} = fieldArrayProps
              const {values} = form
              console.log(form.errors)
              const {phNumbers} = values
              return(
                <div>
                  {phNumbers.map((phNumbers,index)=>(
                    <div key={index}>
                      <Field
                        name={`phNumbers[${index}]`}
                      />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}> - </button>
                      )}
                      <button type="button" onClick={()=> push(index)}> + </button>
                    </div>
                  ))}
                </div>
              )}
          }
        </FieldArray>
        <ErrorMessage name='phNumbers' />
      </div>
      <button type='submit'>Submit</button>
    </Form>
  </Formik>
  )
}

export default Formulario
