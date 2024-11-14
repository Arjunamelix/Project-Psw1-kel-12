import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarComponent from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import {FaSomeIcon} from 'react-icons/fa';

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
            <avbarCompone />
            <Section1 />
            <Section2 />

            <div className="text-center mb-4">
                <p
                    className="intro-text mb-4"
                    style={{
                        padding: "20px",
                        borderRadius: "8px",
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "1.3rem",
                        lineHeight: "1.6",
                        color: "#333",
                        opacity: "0",
                        transition: "opacity 1.5s ease-in-out"
                    }}
                >
                    Selamat datang di platform pembelajaran Fisika Kelas 11! Jelajahi berbagai materi yang menarik dan menantang.
                </p>
            </div>

        </div>
    );
};

export default MenuHome;
