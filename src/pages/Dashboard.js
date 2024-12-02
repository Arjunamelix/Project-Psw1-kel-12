import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import './Dashboard.css';
import kinetik from './gamgam.jpg'; 
import Pemabal from './pg.jpeg'
import Piko from './piko.png'
import Fluitis from './fs.png'
import Pertama from './pertama.jpg'

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    { name: 'Bab5', learned: 2, total: 8 },
    { name: 'Bab6', learned: 3, total: 8 },
    { name: 'Bab7', learned: 6, total: 12 },
    { name: 'Bab8', learned: 8, total: 12 },
    { name: 'Bab9', learned: 9, total: 16 },
  ];

  const courses = [
    {
      title: "Gelombang Bunyi & Cahaya",
      category: 'Bab5',
      by: 'Sarjuna',
      learned: 2,
      total: 12,
      image: Pertama,
      url: '/Modul9',
    },
    {
      title: 'Teori Kinetik Gas',
      category: 'Bab6',
      by: 'Sarjuna',
      learned: 2,
      total: 8,
      image: kinetik,
      url: './Modul6',
    },
    {
      title: 'Fluida Statis',
      category: 'Bab7',
      by: 'Sarjuna',
      learned: 3,
      total: 8,
      image: Fluitis,
      url: '/modul3',
    },
    {
      title: 'Karakteristik Gelombang Mekanik',
      category: 'Bab8',
      by: 'Sarjuna',
      learned: 4,
      total: 6,
      image: Piko,
      url: '/Modul7',
    },
    {
      title: 'Pemanasan Global',
      category: 'Bab9',
      by: 'Sarjuna',
      learned: 9,
      total: 16,
      image: Pemabal,
      url: '/Modul10',
    },
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="dashboard-container">
      <h1>Continue Lesson</h1>

      <div className="category-filter">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            className={selectedCategory === category.name ? 'active' : ''}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="card-container">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            {...course}
            onClick={() => navigate(course.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
