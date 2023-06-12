import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const history =  useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');
  const handleRegister = () => {
    // Perform registration validation
    if (username === '' || password === ''||age === '' || grade === ''||name==='') {
      setError('Please enter all fields.');
      return;
    }

    // Call the onRegister function provided by the parent component
    onRegister(username, password,name,age,grade,setError);
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8">Registration</h2>
        <form onSubmit={(e)=>{
                e.preventDefault();
            handleRegister()
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
            <label className="text-sm font-semibold mb-1">Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold mb-1">Age:</label>
            <input
              type="number"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold mb-1">Grade:</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
            >
              Register
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
      <div className='flex flex-row items-center justify-center p-6 m-3'>
      <div>Already Registered? </div>
      <div className=' text-cyan-700 cursor-pointer' onClick={()=>{
         history('/')
      }}>Login</div>
      </div>
    </div>
  );
};

export default Register;
