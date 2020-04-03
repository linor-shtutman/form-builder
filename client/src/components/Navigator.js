import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { customHistory } from '../index'

const Navigator = ({ pageName, showCreateButton }) => {
    const shouldShowCreate = () => {
        if (showCreateButton) {
            return <Nav.Link onClick={() => customHistory.push('/create')}>Create New Form</Nav.Link>
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>{pageName}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {shouldShowCreate()}
                        {<Nav.Link onClick={() => customHistory.push('/')}>Home</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigator
