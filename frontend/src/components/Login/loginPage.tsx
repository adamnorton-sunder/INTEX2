import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import './Login.css';


Amplify.configure(awsExports);

function Login(props: any) {
  return (
    <>
      <h1>Hello {props.username}</h1>
      <button onClick={props.signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);
