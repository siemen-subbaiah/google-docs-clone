import React, { useContext } from 'react';
import Header from '../components/utils/Header';
import Login from '../components/utils/Login';
import NewDoc from '../components/docs/NewDoc';
import RecentDocs from '../components/docs/RecentDocs';
import { AuthContext } from '../context/auth/AuthState';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          <Header />
          <NewDoc />
          <RecentDocs />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
