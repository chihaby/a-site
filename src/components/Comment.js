import React, { useContext } from 'react';
import moment from 'moment';
import { UserContext } from '../providers/UserProvider';

const belongsToCurrentUser = currentUser => {
  if(!currentUser) return false;
  return currentUser.uid ;
}

const Comment = ({ id, content, createdAt, posts, comments, user, onDelete}) => {

  const currentUser = useContext(UserContext);
 
  // const commentRef = firestore.doc(`posts/${id}`).collection('comments');
  // const remove = () => commentRef.delete();

  return (
    <article className="Comment">
      <span className="Comment--author">{"User: "}</span>
      <span className="Comment--content">{content}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>


      {belongsToCurrentUser(currentUser) && (
            <button onClick={onDelete}>
              Delete
            </button>
            )}


    </article>
  );
};

// Comment.defaultProps = {
//   title: 'An Incredibly Hot Take',
//   content:
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
//   user: {
//     displayName: 'Bill Murray',
//     email: 'billmurray@mailinator.com',
//     photoURL: 'https://www.fillmurray.com/300/300',
//   },
//   createdAt: new Date(),
// };

export default Comment;