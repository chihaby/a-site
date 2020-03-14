import React from 'react';
import Posts from './Posts';
import { auth } from '../firebase';
import Authentication from './Authentication';

class Form extends React.Component {
  state = {
    user: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user })
    })
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { user } = this.state;
    return (
      <main className="wrapper">
        <Authentication user={user} />
        <Posts />
      </main>
    );
  }
}

export default Form;