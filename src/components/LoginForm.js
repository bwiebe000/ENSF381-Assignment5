import React, { useState } from 'react';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      // Handle login logic here
      console.log('Logging in with:', username, password);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      Username:
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button><br />
        <button type="button" onClick={switchToSignup}>Switch to Signup</button>
      </form>
    </div>
  );
};

export default LoginForm;

