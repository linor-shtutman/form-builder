import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMsg = ({ title, msg, onClose }) => {
  return (
    <Alert variant="danger" onClose={() => onClose()} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{msg}</p>
    </Alert>
  )
}

export default ErrorMsg
