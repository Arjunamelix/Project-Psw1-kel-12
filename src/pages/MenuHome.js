import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Header";
import ComponentName from "./zi";
import Section2 from "./Section2";
import Dashboard from './Dashboard';

const MenuHome = () => {
  return (
    <div>
      <Navbar />
      <ComponentName />
      <Section2 />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default MenuHome;
