// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPost } from '../services/CreatPostService';
// import { getPost } from '../services/PostService';
import '../styles/Home.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div className = "home-container">
            <Navbar />
            
            
        </div>
    );
}

export default Home; // Home 컴포넌트 다른 파일에서 사용 가능하도록 내보내기

