import React from "react"
import { useFormik } from "formik"

const initialValues = {
  name: "",
  email: "",
  channel: ""
}
const onSubmit = (values) => {
  console.log(values)
}
const validate = (values) => {
  //values.name values.mail values.channel
  //error.name error.mail error.channel
  //error.name = 'This field is required
  let error = {}

  if (!values.name) {
    error.name = "Name is Requiered"
  }

  if (!values.email) {
    error.email = "Email is Requiered"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = "Invalid email format"
  }

  if (!values.channel) {
    error.channel = "Channel is Requiered"
  }
  return error
}

const Formulario = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
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
