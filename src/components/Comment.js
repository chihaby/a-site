import React, { useContext } from 'react';
import { firestore } from '../firebase';
// import moment from 'moment';
import { UserContext } from '../providers/UserProvider';

const belongsToCurrentUser = (currentUser) => {
  if(!currentUser) return false;
  return currentUser.uid;
}

const Comment = ({ id, content, createdAt, postId }) => {

  const currentUser = useContext(UserContext);
  const commentRef = firestore.doc(`posts/${postId}/comments/${id}`);
  const remove = () => commentRef.delete();
  
  return (
    <div className="comment">
      <span className="user">{"User :  "}</span>
      <span>{content}</span>
      {/* <span className="Comment--timestamp">{moment(createdAt).calendar()}</span> */}
      <span>
        {belongsToCurrentUser(currentUser) && (
          <button onClick={remove}>
            <span role="img" aria-label="Delete"> ❌ </span>
          </button>
          )}
        </span>
    </div>
  );
};

export default Comment;