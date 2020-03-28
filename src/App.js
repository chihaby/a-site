import React from 'react';
import './App.css';
import styled from 'styled-components';
import Jumbo from './components/Jumbotron';
import Navbar from './components/Navbar';
import ModalExampleScrollingContentForBefore from './components/BeforeModal';
import ModalExampleScrollingContentForAfter from './components/AfterModal';
import Posts from './components/Posts';
import Authentication from './components/Authentication';
import PostPage from './components/PostPage';
import { Footer } from './components/Footer';
import {  Switch, Link, Route } from 'react-router-dom';

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
              <Link to="/">
                <h1 className="ui header" >Daily Posts</h1>
              </Link>
              <Authentication />
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/posts/:id" component={PostPage} />
              </Switch>
            </Container>
            <Footer />
        </div>
      );
  }
}

export default App;
