import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMsg = ({ msg, onClose }) => {
  return (
    <Alert variant="danger" onClose={() => onClose()} dismissible>
      <Alert.Heading>Hi There!</Alert.Heading>
      <p>{msg}</p>
    </Alert>
  )
}

export default ErrorMsg
