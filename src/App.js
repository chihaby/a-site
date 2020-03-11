import React from 'react';
import './App.css';
import styled from 'styled-components';
// import { Button } from 'reactstrap';
import Jumbo from './components/Jumbotron';
import Navbar from './components/Navbar';
// import Topic  from './components/Topic';
// import TextInputLarge from './components/TextInputLarge';
import ModalExampleScrollingContentForBefore from './components/BeforeModal';
import ModalExampleScrollingContentForAfter from './components/AfterModal';
import Form from './components/Form';


const Container = styled.div`
  text-align: center;
`

class App extends React.Component {
  state = {
    width: window.innerWidth,
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render () {
    const { width } = this.state;
    const isMobile = width <= 500;
    
    if(isMobile) {
    return (
      <div>
        <Jumbo />
        <Navbar />
        <Container >
          {/* <Button primary onClick={this.showModal}><span role="img" aria-label={""}></span>Before Her</Button>
          {this.state.modal ?
            <ModalExampleScrollingContent /> :
            null
        }
          <Button primary>After Her <span role="img" aria-label={""}></span></Button> */}
          <ModalExampleScrollingContentForBefore />
          <ModalExampleScrollingContentForAfter />
        </Container>
        {/* <h3 style={{textAlign: "center"}}>Topic of the day</h3> */}
        {/* <TextInputLarge /> */}
        <Form />
      </div>
      );
    } else {
      return (
        <div>
          <Jumbo />
          <Navbar />
          <Container >
            <ModalExampleScrollingContentForBefore />
            <ModalExampleScrollingContentForAfter />
        </Container>
          <Form />
        </div>
      );
    }
  }
}

export default App;

// Functional component if needed
// function App() {
//   return (
//     <div>
//       <Jumbo />
//       <Navbar />
//       <Topic />
//     </div>
//   );
// }
