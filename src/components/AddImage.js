// import React, { Component } from 'react';
// import { storage } from '../firebase';
// import { Button, Icon, Image } from 'semantic-ui-react';

// class AddImage extends Component {
//   state = {
//       image: null,
//       url: "",
//       progress: 0
//     };

//   handleChange = e => {
//     if (e.target.files[0]) {
//       const image = e.target.files[0];
//       this.setState(() => ({ image }));
//       console.log("image: ", this.state.image)
//     }
//   };

//   handleUpload = () => {
//     const { image } = this.state;
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         // progress function ...
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         this.setState({ progress });
//       },
//       error => {
//         // Error function ...
//         console.log(error);
//       },
//       () => {
//         // complete function ...
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             this.setState({ url });
//             console.log("url: ",this.state.url);
//           });
//       }
//     );
//   };
//   render() {
//     const { url } = this.state;
//     return (
//       <div>
//         <div>
//           <progress value={this.state.progress} max="100" className="progress" />
//         </div>
//         <br />
//         <div >
//           <div >
//             <Icon name='image' size='large' color='blue'/>
//             <input type="file" onChange={this.handleChange} />
//           </div>
//         </div> 
//         <br />
//         <Button color='green'
//           onClick={this.handleUpload}
//         >
//           Upload
//         </Button>
//         <br />
//         <Image 
//           size='small'
//           src={url}
//           alt="image"
//         />
//       </div>

//     );
//   }
// }

// export default AddImage;