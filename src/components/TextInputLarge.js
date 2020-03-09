import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Form, TextArea } from 'semantic-ui-react'

const TextInputLarge = () => (
  <Form>
    <TextArea placeholder='Tell us more' style={{height: "200px"}}/>
  </Form>
)

export default TextInputLarge;
