import React from 'react';

const Grades = ({ gradesData }) => {
  return (
    <div>
      <h2>Grades</h2>
      {gradesData.map(grade => (
        <div key={grade.id}>
          <p>Course Code: {grade.code}</p>
          <p>Grade: {grade.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default Grades;
