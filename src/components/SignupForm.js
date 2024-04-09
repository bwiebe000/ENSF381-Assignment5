import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      email.trim() !== ''
    ) {
      if (password === confirmPassword) {
        // Handle signup logic here
        console.log('Signing up with:', username, password, email);
      } else {
        alert('Password and Confirm Password must match.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
        Confirm Password:
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br />
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button type="submit">Signup</button><br />
        <button type="button" onClick={switchToLogin}>Switch to Login</button>
      </form>
    </div>
  );
};

export default SignupForm;
