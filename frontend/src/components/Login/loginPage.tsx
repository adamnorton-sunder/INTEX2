import { useContext, useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useUserContext } from './UserContext';
import styles from '../Summary/Summary.module.css';


Amplify.configure(awsExports);

function Login(props: any) {

  useEffect(() => {
    handleAuthStateChange();
  }, []);

  const { user, setUser } = useUserContext();

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleAuthStateChange = async () => {
    try {
      const currentUser: CognitoUser | null = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        // console.log('User successfully signed in:', currentUser);
        let name = currentUser.getUsername();
        let isAuth = true
        setUser({ name, isAuthenticated: isAuth });
      }
    } catch (error) {
      console.log('User nope');
    }
  };

  const handleSignOut = async () => {
    try {
      let name = '';
      let isAuth = false
      setUser({ name, isAuthenticated: isAuth });
      await Auth.signOut();
      // setIsAuthenticated(false);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <>
      <h1>{user?.name}</h1>
      <button className={styles.addButton} onClick={handleSignOut}>
        <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px' }}>SIGN OUT</h3>
      </button>
      <p style={{ marginTop: '40px' }}>Is authenticated: {user?.isAuthenticated.toString()}</p>
    </>
  );
}

export default withAuthenticator(Login);

