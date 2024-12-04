import React from 'react';
import './Card.css';

const CourseCard = ({ title, category, by, learned, total, image, onClick }) => {
  return (
    <div className="course-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image} alt={title} className="course-card-image" />
      <div className="course-card-content">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>
          Progress: {learned}/{total}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
