import React from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

class Form extends React.Component {
  state = {
    title: '',
    content: '',
    posts: []
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection('post').get();

    const posts = snapshot.docs.map(collectIdsAndDocs);

    this.setState({ posts }); 
    console.log({posts})  
  };

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);

    this.setState({ posts: [newPost, ...posts] });
  }

  // handleChange = event => {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit = event =>  {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // // add spining wheel plus complete sign
  // }

  render() {
    const { posts } = this.state;
    return (
      // <form className='form' onSubmit={this.handleCreate}>
      //   <label  >
      //     <h3>Topic of the day</h3>
      //     <textarea 
      //       type="text" 
      //       rows="5" 
      //       cols="80" 
      //       id="TITLE"
      //       value={this.state.value} 
      //       onChange={this.handleChange}
      //       >
      //     </textarea>
      //     <h3>{this.state.value}</h3>
      //     <h4>{this.state.posts.map(post =><div>{post.title}</div>)}</h4>
      //     <h4>{this.state.posts.map(post =><div>{post.content}</div>)}</h4>
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form>
      <Posts posts={posts} onCreate={this.handleCreate}/>
    );
  }
}

export default Form;