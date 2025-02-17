import React, { useState } from "react";
import Daftar from './Daftar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import MenuBook from "./pages/MenuBook";
import Quiz from "./pages/Quiz";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";
import Quiz4 from "./pages/Quiz4";
import Quiz5 from "./pages/Quiz5";
import Kalkulator from "./pages/Kalkulator";
import ContactPage from './pages/ContactForm';


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <h1></h1>
        <Routes>
          <Route path="/" element={<Navigate to="/daftar" replace />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menuhome" element={<MenuHome />} />
          <Route path="/modul1" element={<Modul1 />} />
          <Route path="/modul2" element={<Modul2 />} />
          <Route path="/modul3" element={<Modul3 />} />
          <Route path="/modul4" element={<Modul4 />} />
          <Route path="/modul5" element={<Modul5 />} />
          <Route path="/modul6" element={<Modul6 />} />
          <Route path="/modul7" element={<Modul7 />} />
          <Route path="/modul8" element={<Modul8 />} />
          <Route path="/modul9" element={<Modul9 />} />
          <Route path="/modul10" element={<Modul10 />} />
          <Route path="/menubook" element={<MenuBook />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/kalkulator" element={<Kalkulator />} />
          <Route path="/contactForm" element={<ContactPage />} />
          <Route path="/quiz2" element={<Quiz2/>}/>
          <Route path="/quiz3" element={<Quiz3/>}/>
          <Route path="/quiz4" element={<Quiz4/>}/>
          <Route path="/quiz5" element={<Quiz5/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
