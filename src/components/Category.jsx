import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Category.css';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: '자유게시판', path: '/board/free'},
        { id: 2, name: '공지게시판', path: '/board/notice'},
        { id: 3, name: '질문게시판', path: '/board/question'},
        { id: 4, name: '건의게시판', path: '/board/suggestion'},
    ];
    
    return (
        <div className = "category-container">
            <h2 className = "category-title"> 🔥 Category list 🔥 </h2>
            <ul className = "category-list">
                {categories.map((category) => (
                    <li 
                    key = {category.id} 
                    className = {`category-item ${selectedCategory === category.id ? 'active' : ''}`} 
                    onClick = {() => {
                        setSelectedCategory(category.id);
                        navigate(category.path);
                    }}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;