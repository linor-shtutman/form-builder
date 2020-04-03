import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { customHistory } from '../index'
import { getFormFields, submitForm } from '../ServerRequests'
import FormFields from './FormFields'
import LoadingIcon from './LoadingIcon'
import Navigator from "./Navigator"

class FormSubmit extends React.Component {
    state = {
        name: 'Submit Form',
        fields: [],
        isReady: false,
    }

    async componentDidMount() {
        const result = await getFormFields(this.props.formId)
        if (result) {
            const { name, fields } = result
            this.setState({ name: `Submit Form: ${name}`, fields, isReady: true })
        } else {
            this.props.showModal()
        }
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const values = this.state.fields.reduce(
            (prevValues, { name, type, value }) => ({
                ...prevValues,
                [name]: type === 'color' && !value ? '#0000' : value,
            }),
            {}
        )
        const result = await submitForm({ formId: this.props.formId, values })
        if (result) {
            customHistory.push('/')
        }
        this.props.showModal()
    }

    closeAlert = () => this.setState({ showAlert: false })

    updateFieldValue = ({ name, value }) => {
        this.setState((prevState) => {
            return {
                fields: prevState.fields.map((field) => {
                    if (field.name === name) {
                        return {
                            ...field,
                            value,
                        }
                    }
                    return field
                }),
                isReady: true,
            }
        })
    }

    showForm() {
        return (
            <Container fluid="xl" style={{ marginTop: '15px' }}>
                <Form className="needs-validation" onSubmit={this.onSubmit}>
                    <FormFields fields={this.state.fields} onChange={this.updateFieldValue} />
                    <Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }

    render() {
        return (
            <>
                <Navigator pageName={this.state.name} showCreateButton={false} />
                {!this.state.isReady ?
                    <LoadingIcon />
                    : this.showForm()
                }
            </>
        )
    }
}

export default FormSubmit