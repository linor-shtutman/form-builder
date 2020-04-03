import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingIcon = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
            <Spinner animation="border" />
        </div>
    )
}

export default LoadingIcon
