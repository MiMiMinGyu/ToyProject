import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignUp.module.css';

function SignUp() {
    const [signUpId, setSignUpId] = React.useState(''); 
    const [signUpPassword, setSignUpPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [nickName, setNickName] = React.useState('');
    const navigate = useNavigate();

    const isEmpty = signUpId.trim() === '' || signUpPassword.trim() === '' || confirmPassword.trim() === '' || userName.trim() === '' || nickName.trim() === '';

    const handleSubmit = (event) => {
        event.preventDefault();

        if(signUpPassword !== confirmPassword) {
            window.alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 회원가입 요청
        navigate('/login');
    }

    return (
        <div className = {styles["signup-container"]}>
            <h1 className = {styles["signup-title"]}> Sign Up </h1>
            <form onSubmit = {handleSubmit}>
                <div className = {styles["input-group"]}>
                    <label htmlFor = "signUpId" className ={styles.label}> 아이디 </label>
                    <input type = "text" id = "signUpId" value = {signUpId} onChange = {(e) => setSignUpId(e.target.value)} required />
                </div>

                <div className = {styles["input-group"]}>
                    <label htmlFor = "signUpPassword" className ={styles.label}> 비밀번호 </label>
                    <input type = "password" id = "signUpPassword" value = {signUpPassword} onChange = {(e) => setSignUpPassword(e.target.value)} required />
                </div>

                <div className = {styles["input-group"]}>
                    <label htmlFor = "confirmPassword" className ={styles.label}> 비밀번호 확인 </label>
                    <input type = "password" id = "confirmPassword" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} required />
                </div>

                <div className = {styles["input-group"]}>
                    <label htmlFor = "userName" className ={styles.label}> 이름 </label>
                    <input type = "text" id = "userName" value = {userName} onChange = {(e) => setUserName(e.target.value)} required />
                </div>

                <div className = {styles["input-group"]}>
                    <label htmlFor = "nickName" className ={styles.label}> 닉네임 </label>
                    <input type = "text" id = "nickName" value = {nickName} onChange = {(e) => setNickName(e.target.value)} required />
                </div>

                <button className = {styles.button} type = "submit" disabled = {isEmpty}> Sign up </button>
            </form>
        </div>
    );
}

export default SignUp; 