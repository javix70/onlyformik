import React from "react"
import { useFormik } from "formik"
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  console.log("visited", formik.touched)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='form-control'
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <div className='error-messaje'>{formik.errors.name}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          name='email'
          className='form-control'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div className='error-messaje'>{formik.errors.email}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          className='form-control'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? <div className='error-messaje'>{formik.errors.channel}</div> : null}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Formulario
