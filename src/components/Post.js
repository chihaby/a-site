import React, { useContext } from 'react';
//import moment from 'moment';
import { firestore } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if(!currentUser) return false;
  return currentUser.uid === postAuthor.uid;
}

const Post = ({ id, title, content, user }) => {
  const currentUser = useContext(UserContext);
  const postRef = firestore.doc(`posts/${id}`);

  const remove = () => postRef.delete();
  // const update = () => postRef.update({ title, content});

  return (
      <>
        <div>
          <Link to={`/posts/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div><br />
        <div className="slides">{content}</div>
        <div style={{textAlign: 'center'}}>
          <div>
            {belongsToCurrentUser(currentUser, user) && (
              <div>
                <button className="ui negative button" onClick={remove}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </>
  );
};
export default Post;