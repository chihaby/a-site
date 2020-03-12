import React from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';

class Form extends React.Component {
  state = {
    posts: [],
  }

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts } = this.state;
    return (
      <main>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Form;