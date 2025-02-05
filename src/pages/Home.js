import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectUserName } from '../redux/auth/selectors';

const Home = () => {
  const userName = useSelector(selectUserName);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {userName ? (
        <p>Hello {userName}! Welcome to Phonebook! </p>
      ) : (
        <p>Hello, Please sign in or sign up to use the contact base!</p>
      )}
    </div>
  );
};

export default Home;
