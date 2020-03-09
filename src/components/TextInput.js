import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Form, TextArea } from 'semantic-ui-react'

const TextInput = () => (
  <Form>
    <TextArea placeholder='Tell us more' style={{height: "150px"}}/>
  </Form>
)

export default TextInput
