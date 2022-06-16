import React from 'react';
import Userlist from '../components/Userlist';

const Users = () => {
  const USERS = [{
    id:'user-4414',
    image:'https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name:'KimMyungSeong',
    places:3
  }];
  return <Userlist items={USERS} />
};

export default Users;