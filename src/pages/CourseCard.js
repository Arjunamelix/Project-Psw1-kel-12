import React from 'react';
import './Card.css';

const CourseCard = ({ image, title, category, by, learned, total, categoryColor }) => {
  return (
    <div className="course-card bg-white shadow-lg rounded-lg w-64 h-auto overflow-hidden">
      <img
        src={image}
        alt={title}
        className="rounded-t-lg w-full h-36 object-cover"
      />
      <div className="p-4">
        <span className={`text-xs font-semibold py-1 px-2 rounded ${categoryColor}`}>
          {category}
        </span>
        <h3 className="text-base font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">By: {by}</p>
        <p className="text-sm text-gray-700 mt-3">
          Learned: <span className="font-medium">{learned}/{total}</span>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
