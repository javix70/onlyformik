import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
//Schema Validation with Yup
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: ""
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
        <ErrorMessage name='name' />
      </div>
      <div className="form-group">
        <label htmlFor='email'>E-mail</label>
        <Field
          type='email'
          id='email'
          name='email'
          className='form-control'
        />
        <ErrorMessage name='email' />
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
      <button type='submit'>Submit</button>
    </Form>
  </Formik>
  )
}

export default Formulario
