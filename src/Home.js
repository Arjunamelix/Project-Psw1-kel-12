import React, {useEffect} from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";


const Home = () => {
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
    const introtext = document.querySelector(".intro-text");
    introtext.style.opacity ="0";
    setTimeout(() => {
        introtext.style.transition ="opacity 1.5s ease-in-out";
        introtext.style.opacity ="1";
    }, 100);
}, []);

useEffect(() => {
    document.body.style.background = "linear-gradient(135deg, #f7f4e9, #e6ffe6)";

    return() => {
        document.body.style.background= "";
    };
},[]);

const activeStyle = {
    backgroundColor:"#343a40",
    color:"white",
};

const defaultStyle = {
    color:"#000",
};

const handleLogout = () => {
    navigate("/login");
};


    return (
        <div>
            <Container fluid className="bg-success text-center text-black py-0"
            style={{height:"100px", position:"relative"}}
            >
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img
                    src=""
                    alt="logo"
                    style={{width:'65px',left:'20px', top:'50%',position:'absolute', transform:'translateY(-50%)'}}
                    />
                <div>
                <h1  style={{fontSize:"1.75rem", marginBottom:"5px"}}>Welcome to FISIK</h1>
                <p style={{fontSize:"1rem", margin:"0"}}>
                 Tempat belajar fisika terasik
                </p>
                </div>
            </div>
            </Container> 
            
            <Navbar expand="lg" className="d-flex justify-content-center" style={{width:"100%"}}>
                <Container className="d-flex justify-content-center">
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="w-100">
                        <Nav className="d-flex justify-content-center w-100">
                        <Nav.Link onClick={() => navigate('/Home')}
                        style={location.pathname === "/Home" ? activeStyle : defaultStyle}
                            >Home
                            </Nav.Link>
                            <Nav.Link onClick={() => navigate('/About')}
                            style={location.pathname === "/About" ? activeStyle : defaultStyle}
                                >Tentang</Nav.Link>
                            <Nav.Link onClick={() => navigate('/Contact')}
                                style={location.pathname === "/Contact" ? activeStyle : defaultStyle}
                                >Curhat</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button variant="danger" onClick={handleLogout} className="ms-auto"
                    style={{
                        fontSize:"15px",
                        whiteSpace:"nowrap"
                    }}
                    >Log Out</Button>
                </Container>
            </Navbar>


            <div className="text-center mb-4">
                <p 
                className="intro-text mb-4"
                style={{
                    backgroundColor: "#f8f9fa",
                    padding:"20px",
                    borderRadius:"8px",
                    boxShadow:"0 4px 8px rgba(0, 0, 0,0.1)",
                    fontFamily:"'Roboto' , sans-serif",
                    fontSize:"1.3rem",
                    lineHeight:"1.6",
                    color:"#333",
                    opacity:"0",
                    transition:"opacity 1.5s ease-in-out"
                }}
                >
                    del
                </p>
            </div>

            <div className="container mt-5">
                <h2 className="text-center mb-4"></h2>
                <div className="row">
                    <div className="col-md-4 text-center mb-4">
                        <div className="card">
                            <img src="" alt="fitur 1" className="card-img-top"
                            style={{width:"100%" , height:"250px"}}/>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="card">
                            <img src="" alt="fitur 2" className="card-img-top"
                            style={{width:"100%" , height:"250px"}}/>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="card">
                            <img src="" alt="fitur 3" className="card-img-top"
                            style={{width:"100%" , height:"250px"}}/>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;