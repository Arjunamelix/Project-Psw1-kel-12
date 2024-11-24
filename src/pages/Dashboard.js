import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import CourseCard from './CourseCard';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      image: 'gmbr',
    },
    {
      title: 'Teori Kinetik',
      category: 'Bab6',
      by: 'Sarjuna',
      learned: 2,
      total: 8,
      image: 'gmbr',
    },
    {
      title: 'Ketimpangan Sosias Budaya Dalam Kehidupan Berekonomi Daerah',
      category: 'Bab7',
      by: 'Sarjuna',
      learned: 3,
      total: 8,
      image: 'gmbr',
    },
    {
      title: 'Cara menghadapi stress di lingkungan kerja',
      category: 'Bab8',
      by: 'Sarjuna',
      learned: 4,
      total: 6,
    },
    {
      title: 'Metode pengembangbiakan Singa Florida',
      category: 'Bab9',
      by: 'Sarjuna',
      learned: 9,
      total: 16,
    }
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Continue Lesson</h1>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="flex space-x-6 mt-6 overflow-x-auto no-scrollbar">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
