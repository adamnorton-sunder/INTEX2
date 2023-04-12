import userEvent from '@testing-library/user-event';
import { Auth } from 'aws-amplify';

async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
}

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
