import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class AddComment extends Component {
  state = { content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ content: '', createdAt: new Date() });
  };

  render() {
    const { content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddComment">
          <Form>
                <Form.Field>
                  <label>Comment</label>
                  <input 
                    name="content"
                    type="text"
                    placeholder='Comment' 
                    value={content}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              <Button type='submit'>Add Comment</Button>
            </Form>
        
      </form>
    );
  }
}

export default AddComment;
