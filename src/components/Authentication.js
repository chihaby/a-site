import React, { useContext } from 'react';

import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import { UserContext } from '../providers/UserProvider';
import AddPost from './AddPost';

const Authentication = ({ loading }) => {

  const user = useContext(UserContext);
  if (loading) return null;

  return <div>{user ? <div><CurrentUser {...user}/><AddPost /></div> : <SignIn />}</div>;
};

export default Authentication;