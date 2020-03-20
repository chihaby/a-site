import React, { useContext } from 'react';
//import moment from 'moment';
import { firestore } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
const belongsToCurrentUser = (currentUser) => {
  if(!currentUser) return false;
  return currentUser.uid ;
}

const Post = ({ id, title, content, user, createdAt, stars, comments }) => {
  const currentUser = useContext(UserContext);
  const postRef = firestore.doc(`posts/${id}`);

  const remove = () => postRef.delete();
  // const star = () => postRef.update({ stars: stars + 1 });

  return (
      <article className="form" style={{textAlign: 'center'}}>
        <div className="form">
          <Link to={`/posts/${id}`}>
            <h3>{title}</h3>
          </Link>
          <div>{content}</div>
        </div>
        <div className="Post--meta" style={{textAlign: 'center'}}>
          <div>
            {/* <p>
              <span role="img" aria-label="star">
                ⭐️
              </span>
              {stars}
            </p> */}
            <p>
              {/* <span role="img" aria-label="comments">
                Comments: 
              </span> */}
              {/* {comments} */}
            </p>
            {/* <p>Posted by {user.displayName}</p> */}
            {/* <p>{moment(createdAt).calendar()}</p> */}
          </div>
          <div>
            {/* <button  className="star" onClick={star}>Star</button> */}
            {belongsToCurrentUser(currentUser) && (
            <button onClick={remove}>
              Delete
            </button>
            )}
          </div>
        </div>
      </article>
  );
};

export default Post;