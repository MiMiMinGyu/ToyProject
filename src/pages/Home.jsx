// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPost } from '../services/CreatPostService';
// import { getPost } from '../services/PostService';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import '../styles/Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className = "home-container">
                <Category />
                <div className = "main-content">
                
                </div>
            </div>
        </>
    );
}

export default Home; // Home 컴포넌트 다른 파일에서 사용 가능하도록 내보내기

