import React from 'react';

// import moment from 'moment';
import { signOut } from '../firebase';

const CurrentUser = ({ displayName, photoURL, email, children }) => {
  return (
    <section className="CurrentUser" style={{textAlign:'center', display: 'border-box'}}>
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
          {/* <p className="created-at">{moment(createdAt).calendar()}</p> */}
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;