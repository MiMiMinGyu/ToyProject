// import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/login");
    }
    const handleSignUpClick = () => {
        navigate("/signUp");
    }

    return (
        <nav className = "navbar">
            <div className = "navbar-logo">
                <a href = "/"> Home </a>
            </div>
            <ul className = "navbar-menu">
                <li>
                    <button onClick = {handleLoginClick} className = "navbar-link"> 로그인 </button>
                </li>
                <li>
                    <button onClick = {handleSignUpClick} className = "navbar-link"> 회원가입 </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;