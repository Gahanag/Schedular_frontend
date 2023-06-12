import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Perform registration validation
    if (username === '' || password === '') {
      setError('Please enter username and password.');
      return;
    }

    // Call the onRegister function provided by the parent component
    onRegister(username, password);
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>{error}</p>
    </div>
  );
};

export default Register;
