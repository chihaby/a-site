import React, { useContext } from 'react';
import { firestore } from '../firebase';
import moment from 'moment';
import { UserContext } from '../providers/UserProvider';

const belongsToCurrentUser = currentUser => {
  if(!currentUser) return false;
  return currentUser.uid ;
}

const Comment = ({ id, content, createdAt, postId }) => {

  const currentUser = useContext(UserContext);
  const commentRef = firestore.doc(`posts/${postId}/comments/${id}`);
  const remove = () => commentRef.delete();
  
  return (
    <div className="Comment">
      <span className="Comment--author">{"User: "}</span>
      <span className="Comment--content">{content}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>
      <span>
        {belongsToCurrentUser(currentUser) && (
          <button onClick={remove}>
            Delete
          </button>
          )}
        </span>
    </div>
  );
};

export default Comment;