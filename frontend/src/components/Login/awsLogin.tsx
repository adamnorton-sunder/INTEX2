import { useContext } from "react";
import { Auth } from 'aws-amplify';
import { AuthContext } from "../../contexts/AuthContext";



function AwsLogin() {
  const { login, setIsAuthenticated } = useContext(AuthContext);

  function testOutput() {
    console.log('Test Output!!');
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('NORTY: handling sign in');
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      await login(username, password);

      // Retrieve the user's authentication tokens
      const session = await Auth.currentSession();
      const idToken = session.getIdToken().getJwtToken();
      const accessToken = session.getAccessToken().getJwtToken();
      const refreshToken = session.getRefreshToken().getToken();

      // Do something with the tokens
      console.log("idToken:", idToken);
      console.log("accessToken:", accessToken);
      console.log("refreshToken:", refreshToken);

      setIsAuthenticated(true);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input type="text" name="username" style={{ color: 'black'}} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" style={{ color: 'black'}} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default AwsLogin;
