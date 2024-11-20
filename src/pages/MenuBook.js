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

const MenuBook = () => {
    
const navigate = useNavigate

const menubookStyle = {
    display: "grid",
    gap:"20px",
    justifyContent:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
    padding:"20px",
    background:"linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    borderRadius:"15px",
    boxShadow:"0 8px 20px rgba(0, 0, 0, 0.2)",
    animation:"fadeIn 1s ease-in-out",
};

const fadeInKeyframes = `
    @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0);}
    }
`;

const styleTag = {
    __html: `<style> ${fadeInKeyframes}</style>`,
};

// const bookstyle = {
//     width:"200px",
//     height:"auto",
// };

return (
    <>
    <div dangerouslySetInnerHTML={styleTag}></div>
    <div style={menubookStyle}>
    <Book/>
    <Book2/>
    <Book3/>
    <Book4/>
    <Book5/>
    <Book6/>
    <Book7/>
    <Book8/>
    <Book9/>
    <Book10/>
    </div>
    </>
    );
};

export default MenuBook;