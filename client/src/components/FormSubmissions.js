import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { getFormSubmissions } from '../ServerRequests'
import LoadingIcon from './LoadingIcon'
import InfoMsg from './InfoMsg'
import Navigator from "./Navigator"

class FormSubmissions extends React.Component {
    state = {
        name: 'View Submissions',
        fieldsNames: [],
        submissions: [],
        isReady: false,
    }

    async componentDidMount() {
        const formSubmissions = await getFormSubmissions(this.props.formId)
        if (formSubmissions) {
            const { name, fields, submissions } = formSubmissions
            this.setState({
                name: `View Submissions: ${name}`,
                fieldsNames: fields.reduce((prev, { name }) => prev.concat(name), []),
                submissions,
                isReady: true,
            })
        } else {
            this.props.showModal()
        }
    }

    showInputNamesInHeader() {
        return (
            <thead>
                <tr>
                    {this.state.fieldsNames.map((fieldName, index) => {
                        return <th key={index}>{fieldName}</th>
                    })}
                </tr>
            </thead>
        )
    }

    showSubmitValuesInBody() {
        return (
            <tbody>
                {this.state.submissions.map((submission, index) => {
                    return (
                        <tr key={index}>
                            {Object.values(submission).map((value, index) => {
                                return <td key={index}>{value}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    render() {
        return (
            <>
                <Navigator pageName={this.state.name} showCreateButton={false} />
                {!this.state.isReady ?
                    <LoadingIcon />
                    : !this.state.submissions.length ?
                        <InfoMsg msg="No Submissions" />
                        : <Container
                            fluid="xl"
                            style={{
                                marginTop: '15px',
                            }}>
                            <Table striped bordered hover className="table-sm" responsive>
                                {this.showInputNamesInHeader()}
                                {this.showSubmitValuesInBody()}
                            </Table>
                        </Container>
                }
            </>
        )
    }
}

export default FormSubmissions