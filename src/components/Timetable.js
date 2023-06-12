import React from 'react';

const Timetable = ({ timetableData }) => {
  return (
    <div>
      <h2>Timetable</h2>
      {timetableData.map(course => (
        <div key={course.id}>
          <p>Course Code: {course.code}</p>
          <p>Course Name: {course.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
