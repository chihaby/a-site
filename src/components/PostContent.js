import React, { useContext } from 'react';
import { firestore } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
import { Header, Image, Segment } from 'semantic-ui-react'

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if(!currentUser) return false;
  return currentUser.uid === postAuthor.uid;
}

const PostContent = ({ id, title, content, user }) => {
  const currentUser = useContext(UserContext);
  const postRef = firestore.doc(`posts/${id}`);

  const remove = () => postRef.delete();
  // const update = () => postRef.update({ title, content});

  return (
      <>
        <Segment color='teal' >
          <Link to={`/posts/${id}`}>
            <Header as='h2' color='violet' textAlign='center' >{title}</Header>
          </Link>
        </Segment>
        <div className="slides">
          <div className="content-div">
            <Image src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='large' bordered className="content-img"/>
            {content}
          </div>
        </div>
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
export default PostContent;