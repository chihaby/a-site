import React, { useContext } from 'react';
//import moment from 'moment';
import { firestore } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react'

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
        <div className="post-title">
          <Link to={`/posts/${id}`}>
            <Header as='h2' color='violet' textAlign='center' >{title}</Header>
          </Link>
        </div>
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