import React from 'react';
import './App.css';
// import styled from 'styled-components';
import Jumbo from './components/Jumbotron';
// import ModalExampleScrollingContentForBefore from './components/BeforeModal';
// import ModalExampleScrollingContentForAfter from './components/AfterModal';
import Posts from './components/Posts';
import Authentication from './components/Authentication';
import PostPage from './components/PostPage';
// import AddPost from './components/AddPost';
// import { Footer } from './components/Footer';
import {  Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  render () {
      return (
        <div>
        <Jumbo />
          <div className="main-bg">
              {/* <Link to="/" style={{textAlign: 'center', margin: '15px'}}>
                <h1 className="ui header"  >Daily Posts</h1>
              </Link> */}
              <Container >
                  <Authentication />
                  <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/posts/:id" component={PostPage} />
                  </Switch>
              </Container>
            {/* <Footer /> */}
          </div>
        </div>
      );
  }
}

export default App;
