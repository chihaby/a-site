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
import Posts from './components/Posts';
import Authentication from './components/Authentication';
import PostPage from './components/PostPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
`

class App extends React.Component {
  render () {
      return (
        <div>
          <BrowserRouter>
            <Jumbo />
            <Navbar />
            <Container >
              <ModalExampleScrollingContentForBefore />
              <ModalExampleScrollingContentForAfter />
            </Container>
            <Authentication />
            <Posts />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/:id" component={PostPage} />
            </Switch>

          </BrowserRouter>
        </div>
      );
  //  }
  }
}

export default App;
