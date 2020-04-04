import React from 'react'
import { Button, Container, Col, Form } from 'react-bootstrap'
import { createForm } from '../ServerRequests'
import { customHistory } from '../index'
import ErrorMsg from './ErrorMsg'
import Navigator from "./Navigator"
import FormFields from './FormFields'

class FormsBuilder extends React.Component {
    state = {
        formName: '',
        label: '',
        name: '',
        type: 'text',
        fields: [],
        showAlert: false,
    }

    clearField = () => {
        this.setState({ label: '', name: '', type: 'text' })
    }

    onSave = async (event) => {
        event.preventDefault()
        const { formName, fields } = this.state
        const result = await createForm({ formName, fields })
        if (result) {
            customHistory.push('/')
        } else {
            this.props.showModal()
        }
    }

    onAdd = (event) => {
        event.preventDefault()
        const isNameExists = this.state.fields.reduce(
            (prev, curr) => curr.name === this.state.name || prev,
            false
        )
        if (!isNameExists) {
            const { label, name, type } = this.state
            this.setState((prevState) => ({
                fields: [
                    ...prevState.fields,
                    {
                        label,
                        name,
                        type,
                    },
                ],
            }))
            this.clearField()
        } else {
            this.setState({ showAlert: true })
        }
    }

    closeAlert = () => this.setState({ showAlert: false })

    isSaveButtonDisabled = () => !(this.state.formName && this.state.fields.length)

    isAddButtonDisabled = () => !(this.state.label && this.state.name)

    showAddFieldGroup() {
        return (
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Please enter field label"
                        value={this.state.label}
                        onChange={(e) => this.setState({ label: e.target.value })}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Please Enter input name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control
                        as="select"
                        value={this.state.type}
                        onChange={(e) => this.setState({ type: e.target.value.toLowerCase() })}
                    >
                        <option value="text">Text</option>
                        <option value="color">Color</option>
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                        <option value="tel">Tel</option>
                        <option value="number">Number</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        )
    }

    showButtonsGroup() {
        return (
            <Form.Group>
                <Button
                    onClick={this.onAdd}
                    variant="secondary"
                    type="submit"
                    disabled={this.isAddButtonDisabled()}>
                    Add Field
                </Button>
                <div
                    style={{
                        width: '5px',
                        height: 'auto',
                        display: 'inline-block',
                    }}
                />
                <Button
                    onClick={this.onSave}
                    variant="secondary"
                    type="submit"
                    disabled={this.isSaveButtonDisabled()}>
                    Save
                </Button>
            </Form.Group>
        )
    }

    showFormName() {
        return (
            <Form.Group>
                <Form.Label className="ml-1 grey-text">Form Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Please enter form name"
                    value={this.state.formName}
                    onChange={(e) => this.setState({ formName: e.target.value })}
                />
            </Form.Group>
        )
    }

    render() {
        return (
            <>
                <Navigator pageName="Create New Form" showCreateButton={false} />
                <Container
                    fluid="xl"
                    style={{
                        marginTop: '15px',
                    }}
                >
                    <Form>
                        {this.state.showAlert ?
                            <ErrorMsg msg="Please choose unique input name" onClose={this.closeAlert} />
                            : null}
                        {this.showFormName()}
                        <FormFields fields={this.state.fields} />
                        {this.showAddFieldGroup()}
                        {this.showButtonsGroup()}
                    </Form>
                </Container>
            </>
        )
    }
}

export default FormsBuilder
