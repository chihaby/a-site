import React, { Component } from 'react';
import { firestore, auth } from '../firebase';

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
      <div style={{textAlign: 'center'}}>
        <form onSubmit={this.handleSubmit}>
          <input 
            className='form'
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />

          <textarea 
            type="text" 
            rows="7" 
            cols="60" 
            name="content"
            placeholder="Body"
            value={content} 
            onChange={this.handleChange}
            >
          </textarea>
          <input className="ui primary button" type="submit" value="Create Post" />
        </form>

      </div>

    );
  }
}

export default AddPost;