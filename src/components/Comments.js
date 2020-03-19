import React from 'react'
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = ({ comments, onCreate, onDelete }) => {
  return (
    <section className="Comments">
      <AddComment onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} onDelete={onDelete}/>)}
    </section>
  )
}
export default Comments;