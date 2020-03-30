import React, { Component } from 'react';
import Post from './Post';
import { storage } from '../firebase';
import { Button, Icon } from 'semantic-ui-react';

class ImageUpload extends Component {
  state = {
      image: null,
      url: "",
      progress: 0
    };

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
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
          });

      }
    );
 
  };
  render() {
    const { url } = this.state;
    return (
      <div>
        <div>
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <div >
          <div >
            <Icon name='image' size='large' color='blue'/>
            <input type="file" onChange={this.handleChange} />
          </div>
        </div> 
        <br />
        <Button color='green'
          onClick={this.handleUpload}
        >
          Upload
        </Button>
        <br />
        <img
          src={url}
          alt="Uploaded Images"
        />
        <Post url={this.url} />
      </div>
    );
  }
}

export default ImageUpload;