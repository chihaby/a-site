import React, { Component } from 'react';
import { firestore, auth } from '../firebase';
import { Button, Form, TextArea  } from 'semantic-ui-react';
class AddPost extends Component {
  state = { title: '', content: '' };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const post = {
      title,
      content,
        user: {
        uid,
        displayName,
        email,
        photoURL
      },
      createdAt: new Date(),
    }

    firestore.collection('posts').add(post);

    this.setState({ title: '', content: '' });
  };

  render() {
    const { title, content } = this.state;
    return (
      <div style={{textAlign: 'center' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <input 
              className='form'
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <TextArea 
              type="text" 
              rows="7" 
              cols="60" 
              name="content"
              placeholder="Tell us more"
              value={content} 
              onChange={this.handleChange}
              >
            </TextArea>
          </Form.Field>
          <Button className="ui primary button" type="submit" value="Create Post">Create Post</Button>
        </Form>

      </div>

    );
  }
}

export default AddPost;