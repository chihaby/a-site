import React, { Component } from 'react';
import { firestore } from '../firebase';
// import { textarea }

class AddPost extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { title, content } = this.state;

    const post = {
      title,
      content,
      // user: {
      //   uid: '1111',
      //   displayName: 'Steve Kinney',
      //   email: 'steve@mailinator.com',
      //   photoURL: 'http://placekitten.com/g/200/200',
      // },
      favorites: 0,
      comments: 0,
      // createdAt: new Date(),
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
            className='form'
            type="text" 
            rows="7" 
            cols="60" 
            name="content"
            placeholder="Body"
            value={content} 
            onChange={this.handleChange}
            >
          </textarea>
          <input className="form" type="submit" value="Create Post" />
        </form>
      </div>
    );
  }
}

export default AddPost;