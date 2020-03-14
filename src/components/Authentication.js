
import React from 'react';

import CurrentUser from './CurrentUser';
import SignIn from './SignIn';

const Authentication = ({ user, loading }) => {
  if (loading) return null;

  return <div>{user ? <CurrentUser {...user}/> : <SignIn />}</div>;
};

export default Authentication;