import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../components/Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import {FaSomeIcon} from 'react-icons/fa';
import { BiBorderRadius } from "react-icons/bi";
import ComponentName from "./zi";


const MenuHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const introtext = document.querySelector(".intro-text");
        introtext.style.opacity = "0";
        setTimeout(() => {
            introtext.style.transition = "opacity 1.5s ease-in-out";
            introtext.style.opacity = "1";
        }, 100);
    }, []);

    useEffect(() => {
        document.body.style.background = "linear-gradient(135deg, #f7f4e9, #e6ffe6)";
        return () => {
            document.body.style.background = "";
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Section1 />
            <Section2 />
            <ComponentName />
        </div>
    );
};

export default MenuHome;
