import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import photo from '../images/andrea.JPG'

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className='Jumbo-background'>
        <img className="photo-bio" src={photo} alt="avatar"/>
        <h3 className="display-3">Andrea Chihaby</h3>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;