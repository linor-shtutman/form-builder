import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getForms } from '../ServerRequests'
import LoadingIcon from './LoadingIcon'
import InfoMsg from './InfoMsg'
import Navigator from "./Navigator"

class FormsList extends React.Component {
    state = {
        forms: [],
        isReady: false,
    }

    async componentDidMount() {
        const forms = await getForms()
        if (forms) {
            this.setState({ forms, isReady: true })
        } else {
            this.props.showModal()
        }
    }

    render() {
        return (
            <>
                <Navigator pageName="Forms" showCreateButton />
                {!this.state.isReady ?
                    <LoadingIcon />
                    : !this.state.forms.length ?
                        <InfoMsg msg="No Forms" />
                        : <Container
                            fluid="xl"
                            style={{
                                marginTop: '15px',
                            }}>
                            <Table striped bordered hover className="table-sm" responsive>
                                <thead>
                                    <tr>
                                        <th>Form Id</th>
                                        <th>Form Name</th>
                                        <th># Submissions</th>
                                        <th>Submit Page</th>
                                        <th>Submissions Page</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.forms.map((form, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{++index}</td>
                                                <td>{form.name}</td>
                                                <td>{form.number_of_submissions}</td>
                                                <td>
                                                    <Link to={`/submit/${form._id}`}>View</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/submissions/${form._id}`}>View</Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Container>
                }
            </>
        )
    }
}

export default FormsList
