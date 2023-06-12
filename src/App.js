import React, { useState } from 'react';
import axios from 'axios';
import Login from './components/LoginUser';
import Register from './components/RegisterUser';
import CourseRegistration from './components/CourseRegistration';
import Timetable from './components/Timetable';
import Grades from './components/Grades';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudentDashboardPage from './components/StudentDashBoard';
// import {  use } from 'react-router-dom';

const App = () => {
  // const history =  useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [view, setView] = useState('');
  const [timetableData, setTimetableData] = useState([]); // Placeholder for timetable data
  const [gradesData, setGradesData] = useState([]); // Placeholder for grades data
  const Backend_URL = "http://localhost:5000"

  const handleLogin = async (username,password,setError) => {
  

    try {
      const response = await axios.post(`${Backend_URL}/login`, { username, password });
      console.log(response.data); // Display success message or perform any desired action on successful login
      setUser(response.data.user)
      setLoggedIn(true)
      // history('/register')
    } catch (error) {
      setError('Invalid credentials');
      console.error(error);
    }
  };
  // const handleLogin = (username, password) => {
  //   // Perform login validation
  //    // Send data to the backend via POST
  //   jsonData = {
  //     "username": username,
  //     "password": password
  //   }
  //   fetch(Backend_URL, {  

  //    method: 'POST', 
  //    mode: 'cors', 
  //    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

  //  })

  //   // if (username === 'admin' && password === 'password') {
  //   //   setLoggedIn(true);
  //   //   setUser({ username });
  //   //   setView('');
  //   // } else {
  //   //   // Show error message for invalid credentials
  //   //   console.log('Invalid credentials');
  //   // }
  // };

  // const handleRegister = (username, password) => {
  //   // Perform registration logic
  //   // This is a placeholder, you should implement your own logic here
  //   console.log('User registration:', username, password);
  // };
  const handleRegister= async (username,password,name,age,grade,setError) => {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    console.log(`${Backend_URL}/register`)
    try {
      const response = await axios.post(`${Backend_URL}/register`, { username, password, name, age, grade });
      console.log(response.data); // Display success message or perform any desired action on successful registration
    } catch (error) {
      setError('Registration failed');
      console.error(error);
    }
  };

  const handleCourseRegistration = (courseCode, courseName) => {
    // Perform course registration logic for the current user
    // This is a placeholder, you should implement your own logic here
    console.log('Course registration:', courseCode, courseName);
  };

  const handleLogout = () => {
    // Clear user data and reset loggedIn state
    setLoggedIn(false);
    setUser(null);
    setView('');
  };

  return (
    <Router>
      <Routes>
     
        <Route path="/" element={ !loggedIn?<Login onLogin={handleLogin}/>:<StudentDashboardPage user={user} setLoggedIn={setLoggedIn} setUser={setUser} Backend_URL={Backend_URL}/>}/>
          
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
      </Routes>
    </Router>
    // <div>
    //   {!loggedIn && (
    //       <Login onLogin={handleLogin}/>
    //   )}

    //   {loggedIn && (
    //     <div>
    //       <button onClick={handleLogout}>Logout</button>
    //       {view === 'courseRegistration' && <CourseRegistration onCourseRegistration={handleCourseRegistration} />}
    //       {view === 'timetable' && <Timetable timetableData={timetableData} />}
    //       {view === 'grades' && <Grades gradesData={gradesData} />}
    //       {!view && (
    //         <div>
    //           <button onClick={() => setView('courseRegistration')}>Register Course</button>
    //           <button onClick={() => setView('timetable')}>View Timetable</button>
    //           <button onClick={() => setView('grades')}>View Grades</button>
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

export default App;
