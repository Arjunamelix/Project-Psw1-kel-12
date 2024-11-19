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
    display: "flex",
    flexWrap:"wrap",
    gap:"20px",
    justifyContent:"center",
};

const bookstyle = {
    width:"200px",
    height:"auto",
};

return (
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
    )
}

export default MenuBook;