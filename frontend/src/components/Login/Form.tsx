import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";

interface LoginForm {
  username: string;
  password: string;
}

function MyForm() {
  const [loginData, setLoginData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginData.username, loginData.password); // For demo purposes only
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={loginData.username}
        onChange={handleChange}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default MyForm;
