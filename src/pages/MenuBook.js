import React from "react";
import { useNavigate } from "react-router-dom";
import Book from "./Book";
import Book2 from "./Book2";
import Book3 from "./Book3";
import Book4 from "./Book4";
import Book5 from "./Book5";
import Book6 from "./Book6";
import Book7 from "./Book7";
import Book8 from "./Book8";
import Book9 from "./Book9";
import Book10 from "./Book10";
import Navbar from "../components/Header";

const MenuBook = () => {
    
const navigate = useNavigate();

const menubookStyle = {
    display: "grid",
    gap:"30px",
    justifyContent:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
    padding:"20px",
    // background:"linear-gradient(135deg, #e0f7fa, #80deea)",
    borderRadius:"15px",
    boxShadow:"0 8px 20px rgba(0, 0, 0, 0.2)",
    animation:"fadeIn 1s ease-in-out",
    minHeight: "100vh",
    background: "url('backgroundbook.jpg') no-repeat center center/cover",
};

const cardstyle = {
    cursor:"pointer",
    padding:"10px",
    borderRadius:"10px",

    boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign:"center",
    transition:"transform 0.3s, box-shadow 0.3s",
};

const handleCardClick = (bookId) => {
  navigate(`/modul${bookId}`);
};

return (
     <div><Navbar />
    <div style={menubookStyle}>
        <div style={cardstyle} onClick={() => handleCardClick(1)}>
             <Book/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(2)}>
             <Book2/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(3)}>
             <Book3/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(4)}>
             <Book4/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(5)}>
             <Book5/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(6)}>
             <Book6/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(7)}>
             <Book7/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(8)}>
             <Book8/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(9)}>
             <Book9/>
        </div>
        <div style={cardstyle} onClick={() => handleCardClick(10)}>
             <Book10/>
        </div>
    </div>
    </div>
    );
};


export default MenuBook;