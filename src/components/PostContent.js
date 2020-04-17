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

const PostContent = ({ id, title, content, url, user }) => {

  const currentUser = useContext(UserContext);
  const postRef = firestore.doc(`posts/${id}`);
  const imageRef = storage.refFromURL(url);

const remove = () => {
  imageRef.delete().then(() => {
    postRef.delete()
  }).catch(function(error) {
    console.log(error)
  })
}

  // const update = () => postRef.update({ title, content});
  console.log(imageRef);
  console.log('url: ', url)

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


