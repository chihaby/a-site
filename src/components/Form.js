import React from 'react';
import Posts from './Posts';
import Authentication from './Authentication';

class Form extends React.Component {

  render() {
    return (
      <main className="wrapper">
        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Form;