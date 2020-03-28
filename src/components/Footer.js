import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" >Follow us on social media</h5>
          </MDBCol>
          <MDBCol md="6" style={{display: 'flex'}}>
            <ul>
              <li className="list-unstyled">
                <a href="#!" fab icon="facebook-f">fb</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">tw</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">IG</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;