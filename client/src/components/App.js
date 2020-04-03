import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormsList from './FormsList'
import FormBuilder from './FormBuilder'
import FormSubmit from "./FormSubmit"
import FormSubmissions from './FormSubmissions'
import ShowModal from './ShowModal'

class App extends React.Component {
    state = { showModal: false }

    showModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div>
                {this.state.showModal ? <ShowModal closeModal={this.closeModal} /> : null}
                <Switch>
                    <Route
                        path="/create"
                        render={() =>
                            <FormBuilder
                                showModal={this.showModal}
                            />
                        }
                    />
                    <Route
                        path="/submit/:id"
                        render={(props) => (
                            <FormSubmit
                                formId={props.match.params.id}
                                showModal={this.showModal}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        path="/submissions/:id"
                        render={(props) => (
                            <FormSubmissions
                                formId={props.match.params.id}
                                showModal={this.showModal}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        path="/"
                        render={() =>
                            <FormsList
                                showModal={this.showModal}
                            />
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default App
