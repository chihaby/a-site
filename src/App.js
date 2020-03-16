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
  render () {
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
  //  }
  }
}

export default App;
