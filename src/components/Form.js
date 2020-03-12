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
    const snapshot = await firestore.collection('posts').get();

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

  render() {
    const { posts } = this.state;
    return (
      <Posts posts={posts} onCreate={this.handleCreate}/>
    );
  }
}

export default Form;