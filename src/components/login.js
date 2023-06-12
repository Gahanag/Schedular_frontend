import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform login validation
    if (username === '' || password === '') {
      setError('Please enter username and password.');
      return;
    }

    // Call the onLogin function provided by the parent component
    onLogin(username, password);
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{error}</p>
    </div>
  );
};

export default Login;
