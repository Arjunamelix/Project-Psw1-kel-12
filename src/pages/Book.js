import React from "react";
import { BiFontFamily } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Book = () => {

    const navigate= useNavigate();

    const sectionStyle = {
        textAlign: 'center',
        margin: ' 50px auto',
        padding: '20px',
        BorderRadius: '10px',
        maxWidth: '300px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    };

    const image = {
        width: '150px',
        height: 'auto',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 0 15px rgba(225, 200, 100, 0.8)',
        cursor:'pointer',
    };

    const title = {
        margin: '20px 0 10px',
        fontSize:"20px",
        color: '#333',
        fontFamily:"times new roman"
    };

    const dekripsi = {
        color:'#666',
        fontSize: '14px',
    };

    const handleMouseEnter = (e) => {
        e.target.style.transform = 'scale(1.2) rotate(-5deg)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = 'scale(1) rotate(0deg)';
    };

    const handleClick = () => {
        navigate('/modul1');
    }
    

    return (
        <div style={sectionStyle}>
            <img 
            src="buku.jpg" 
            alt="buku"
            style={image}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            />
            <h2 style={title}>DINAMIKA ROTASI DAN BENDA TEGAR</h2>
            <p style={dekripsi}></p>
        </div>
    );
};

export default Book;