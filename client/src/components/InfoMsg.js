import React from 'react'
import { Alert } from 'react-bootstrap'

const InfoMsg = ({ msg }) => {
    return (
        <Alert variant="dark" style={{ textAlign: 'center' }}>
            {msg}
        </Alert>
    )
}

export default InfoMsg
