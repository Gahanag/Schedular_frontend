import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login= ({onLogin}) => {
  const history =  useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    // Perform login validation
    if (username === '' || password === '') {
      setError('Please enter username and password.');
      console.log("empty")
      return;
    }

    // Call the onLogin function provided by the parent component
    onLogin(username, password,setError);
  };
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        <form onSubmit={(e)=>{
          e.preventDefault()
          handleLogin()
          }}>
          <div className="mb-4">
            <label className="text-sm font-semibold mb-1">Username:</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold mb-1">Password:</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button 
            type='submit'
           
              className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Login
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
      <div className='flex flex-row items-center justify-center p-6 m-3'>
      <div>New Here?</div>
      <div className=' text-cyan-700 cursor-pointer' onClick={()=>{
         history('/register')
      }}>Register</div>
      </div>
    </div>
  );
};

export default Login;
