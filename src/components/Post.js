import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Segment, Button } from 'semantic-ui-react';

const Post = ({ id, title, preview, url, image }) => {
console.log("url: ");
console.log("image: ", image)

  return (

      <>
        <Segment color='teal' >
          <Link to={`/posts/${id}`}>
            <Header as='h2' color='violet' textAlign='center' >{title}</Header>
          </Link>
        </Segment>
        <div className="slides">
          <div className="preview">
            <Image src={url} alt="imaaaag" size='large' bordered className="content-img"/>
            {preview} <br />
            <Link to={`/posts/${id}`}>
              <Button color="violet" className="read-more">Read more</Button>
            </Link>
          </div>

        </div>
      </>
  );
};
export default Post;