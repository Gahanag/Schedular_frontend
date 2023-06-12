import React, { useState } from 'react';

const CourseRegistration = ({ onCourseRegistration }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState('');

  const handleCourseRegistration = () => {
    // Perform course registration validation
    if (courseCode === '' || courseName === '') {
      setError('Please enter course code and course name.');
      return;
    }

    // Call the onCourseRegistration function provided by the parent component
    onCourseRegistration(courseCode, courseName);
  };

  return (
    <div>
      <input type="text" placeholder="Course Code" value={courseCode} onChange={e => setCourseCode(e.target.value)} />
      <input type="text" placeholder="Course Name" value={courseName} onChange={e => setCourseName(e.target.value)} />
      <button onClick={handleCourseRegistration}>Register Course</button>
      <p>{error}</p>
    </div>
  );
};

export default CourseRegistration;
