import React, { Component } from 'react';
import Post from './Post';
import Comments from './Comments';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';
import { withRouter } from 'react-router-dom';

class PostPage extends Component {
  state = { post: null, comments: [] };

  get postId() {
    return this.props.match.params.id;

  }

  get postRef() {
    return firestore.doc(`posts/${this.postId}`);
  }

  get commentsRef() {
    return this.postRef.collection('comments');
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = await this.postRef.onSnapshot(snapshot => {
      const post = collectIdsAndDocs(snapshot);
      this.setState({ post });
    });

    this.unsubscribeFromComments = this.commentsRef.orderBy("content", "desc").onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ comments });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  };

  createComment = comment => {
    this.commentsRef.add({ ...comment });
  };

  render() {
    const { post, comments } = this.state;
    return (
      <section className="slides body">
        {post && <Post {...post} />}
        <Comments comments={comments} onCreate={this.createComment} onDelete={this.deleteComment} postId={this.postId}/>
      </section>
    );
  }
}

export default withRouter(PostPage);