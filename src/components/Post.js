import React from 'react';
import moment from 'moment';
import { firestore } from '../firebase';

const Post = ({ id, title, content, user, createdAt, stars, comments }) => {

  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();

  return (
    <article className="form" style={{textAlign: 'center'}}>
      <div className="form">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          {/* <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p> */}
          <p>
            {/* <span role="img" aria-label="comments">
              🙊
            </span> */}
            {comments}
          </p>
          {/* <p>Posted by {user.displayName}</p> */}
          <p>{moment(createdAt).calendar()}</p>
        </div>
        <div>
          <button className="star">Star</button>
          <button className="delete" onClick={remove}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default Post;