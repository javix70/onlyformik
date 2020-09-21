import React from 'react'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'

const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
			return <Input {...rest} />
		case 'textarea':
			return <TextArea {...rest} />
		case 'select':
			return <Select {...rest} />
		case 'radio':
		case 'checkbox':
		case 'date':
			defaul: return null
	}
}

export default FormikControl
