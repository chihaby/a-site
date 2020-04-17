import React, { Component } from 'react';
import { firestore, storage, auth } from '../firebase';
import { Button, Form, TextArea, Icon, Image, Divider } from 'semantic-ui-react';


class AddPost extends Component {
  state = { title: '', preview:'', content: '',  url: '', progress: 0 };
  
  handleUploadChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = (e) => {
    e.preventDefault(); 

    const { image } = this.state;

    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log("url: ",this.state.url);
          });
      }
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { title, preview, content, url, progress } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const post = {
      title,
      preview,
      content,
      url,
      progress,
        user: {
        uid,
        displayName,
        email,
        photoURL
      },
      createdAt: new Date(),
    }

    firestore.collection('posts').add(post);

    this.setState({ title: '', preview: '', content: '', image: null, url: "", progress: 0 });
  };


  render() {
    const { title, preview, content, url, progress } = this.state;
    return (
      <div>
        <div style={{textAlign: 'center'}}> 
          <div >
            <progress value={progress} max="100" className="progress" />
          </div>
          <br />
          <div >
            <Icon name='image' size='large' color='blue'/>
            <input type="file" required multiple onChange={this.handleUploadChange} />
          </div> 
          <br />
          <Button color='red' size='massive'
            onClick={this.handleUpload}
          >
            Upload 
          </Button>
          <br />
          <Divider/>
            <Image 
              size='large'
              src={url}
              alt=""
            />
        </div>

        <div style={{textAlign: 'center' }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <input 
                className='form'
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <TextArea 
                type="text" 
                rows="5" 
                cols="60" 
                name="preview"
                placeholder="preview"
                value={preview} 
                onChange={this.handleChange}
                >
              </TextArea>
            </Form.Field>
            <Form.Field>
              <TextArea 
                type="text" 
                rows="10" 
                cols="60" 
                name="content"
                placeholder="Tell us more"
                value={content} 
                onChange={this.handleChange}
                >
              </TextArea>
            </Form.Field>
            <Button className="ui primary button" type="submit" value="Create Post">Create Post</Button>
          </Form>
        </div>
      </div>
    );
  }

  }

export default AddPost;