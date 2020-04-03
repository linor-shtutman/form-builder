import React from 'react'
import { Form } from 'react-bootstrap'

const FormFields = ({ fields, onChange }) => {
    return (
        <Form.Group>
            {fields.map(({ label, name, type, value }, index) => {
                return (
                    <Form.Group key={index}>
                        <Form.Label className="ml-1 grey-text">{label}</Form.Label>
                        {onChange ?
                            <Form.Control
                                type={type}
                                name={name}
                                value={value || ''}
                                className="form-control"
                                onChange={(e) => onChange({ name: e.target.name, value: e.target.value })}
                                required
                            />
                            : <Form.Control className="form-control" type={type} name={name} />
                        }
                    </Form.Group>
                )
            })}
        </Form.Group>
    )
}

export default FormFields
