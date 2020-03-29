import React from 'react'
import Comment from './Comment';
import AddComment from './AddComment';
import { Container } from 'semantic-ui-react';

const Comments = ({ comments, onCreate, onDelete, postId}) => {
  return (
    <Container className="comments">
      <AddComment onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} onDelete={onDelete} postId={postId}/>)}
    </Container>
  )
}
export default Comments;