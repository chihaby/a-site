import React, { useContext } from 'react';
import { firestore, storage } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
import { Header, Image, Segment } from 'semantic-ui-react';
import InnerNavbar from './InnerNavbar';

const belongsToCurrentUser = (currentUser) => {
  if(!currentUser) return false;
  return currentUser.uid;
}

const PostContent = ({ id, title, content, url, user, imageName }) => {

  const currentUser = useContext(UserContext);
  const postRef = firestore.doc(`posts/${id}`);
  const storageRef = storage.ref();
  const imagesRef = storageRef.child(`images/${imageName}`);

const remove = () => {
  postRef.delete();
  imagesRef.delete().catch((error) => {
    console.error(error)
  });
}

  // const update = () => postRef.update({ title, content});

  return (
      <>
      <InnerNavbar />
        <Segment color='teal' >
          <Link to={`/posts/${id}`}>
            <Header as='h2' color='violet' textAlign='center' >{title}</Header>
          </Link>
        </Segment>
        <div className="slides">
          <div className="content-div">
            <Image src={url} size='large' className="img-div"/>
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


