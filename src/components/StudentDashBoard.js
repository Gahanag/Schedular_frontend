import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentDashboardPage = ({user,setLoggedIn,setUser,Backend_URL}) => {
 const studentName = user.username
 const overallGrade = user.grade
 const [timetableData, setTimetableData] = useState([]);
 const [gradesData, setGradesData] = useState([]);
 

 useEffect(() => {
   // Fetch timetable data for the student
   axios.get(`${Backend_URL}/timetable/${user.id}`)
     .then(response => {
       setTimetableData(response.data);
       console.log(response.data)
     })
     .catch(error => {
       console.log('Error fetching timetable data:', error);
     });
     axios.get(`${Backend_URL}/grades/${user.id}`)
     .then(response => {
       setGradesData(response.data);
      
     })
     .catch(error => {
       console.log('Error fetching timetable data:', error);
     });
 }, []);


 

  return (
    <div className="bg-gray-200 min-h-screen">
       {/* Navbar */}
       <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold mr-4">{studentName}</div>
          <div className="text-lg font-semibold">{`Overall Grade: ${overallGrade}`}</div>
        </div>
        <div>
          <div onClick={()=>{
            setUser(null)
            setLoggedIn(false)
          }} className="text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">Logout</div>
        </div>
      </nav>
      {/* Timetable */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-4">Timetable</h2>
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Day</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.day}</td>
                <td className="py-2 px-4 border-b">{item.time}</td>
                <td className="py-2 px-4 border-b">{item.course}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">Register</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Grades */}
      <section className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-4">Grades</h2>
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Course</th>
              <th className="py-2 px-4 border-b">Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.course}</td>
                <td className="py-2 px-4 border-b">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default StudentDashboardPage;
