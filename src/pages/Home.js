import React from 'react';

import { useSelector } from 'react-redux';
import { selectUserName } from '../redux/auth/selectors';
import css from './Home.module.css';

const Home = () => {
  const userName = useSelector(selectUserName);

  return (
    <div>
      {userName ? (
        <p className={css.welcome}>Hello {userName}! Welcome to Phonebook! </p>
      ) : (
        <p className={css.welcome}>
          Hello, Please sign in or sign up to use the contact base!
        </p>
      )}
    </div>
  );
};

export default Home;
