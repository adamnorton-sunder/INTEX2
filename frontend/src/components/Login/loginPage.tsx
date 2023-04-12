import { useContext } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';

Amplify.configure(awsExports);

function Login(props: any) {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <>
      <h1>Hello {props.username}</h1>
      <button onClick={handleSignOut}>Sign out</button>
      <p>Is authenticated: {isAuthenticated.toString()}</p>
    </>
  );
}

export default withAuthenticator(Login);
