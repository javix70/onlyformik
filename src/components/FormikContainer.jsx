import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
const FormikContainer = () => {
	const dropdownOption = [
		{ key: 'Select an option', value: '' },
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	]
	const initialValues = {
		email: '',
		description: '',
		dropdownOption: '',
	}
	const validateSchema = Yup.object({
		email: Yup.string().required('Required!'),
		description: Yup.string().required('Required'),
		dropdownOption: Yup.string().required('Required'),
	})
	const onSubmit = (value) => {
		console.log('Form data', value)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validateSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
				return (
					<Form>
						<FormikControl
							control='input'
							type='email'
							label='Email'
							name='email'
						/>
						<FormikControl
							control='textarea'
							type='text'
							label='Description'
							name='description'
						/>
						<FormikControl
							control='select'
							type='select'
							label='Select a topic'
							name='selectOption'
							option={dropdownOption}
						/>

						<button type='submit'>Submit</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default FormikContainer
