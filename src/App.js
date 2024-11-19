import React from "react";
import Daftar from './Daftar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Login';
import MenuHome from './pages/MenuHome';
import './App.css';
import Modul1 from './pages/Modul1';
import Modul2 from './pages/Modul2';
import Modul3 from './pages/Modul3';
import Modul4 from './pages/Modul4';
import Modul5 from './pages/Modul5';
import Modul6 from './pages/Modul6';
import Modul7 from './pages/Modul7';
import Modul8 from './pages/Modul8';
import Modul9 from './pages/Modul9';
import Modul10 from "./pages/Modul10";

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
      <Route path="/modul2" element={<Modul2/>}/>
      <Route path="/modul3" element={<Modul3/>}/>
      <Route path="/modul4" element={<Modul4/>}/>
      <Route path="/modul5" element={<Modul5/>}/>
      <Route path="/modul6" element={<Modul6/>}/>
      <Route path="/modul7" element={<Modul7/>}/>
      <Route path="/modul8" element={<Modul8/>}/>
      <Route path="/modul9" element={<Modul9/>}/>
      <Route path="/modul10" element={<Modul10/>}/>

    </Routes>
    </div>
    </Router>
  );
};

export default App;