import React from "react";
import Daftar from './Daftar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Login';
import MenuHome from './pages/MenuHome';
import './App.css';
import Modul1 from './pages/Modul1'


const App = () => {
  return (
    <Router>
    <div>
      <h1></h1>
      <Routes>
        <Route path="/" element={<Navigate to="/menuhome" replace />} />
      <Route path="/daftar" element={<Daftar />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/menuhome" element={<MenuHome/>}/>
      <Route path="/modul1" element={<Modul1/>}/>

    </Routes>
    </div>
    </Router>
  );
};

export default App;