import React from 'react';
import { login } from '../services/LoginService'; // LoginService.js 파일에서 login 함수 가져오기
import '../styles/Login.css';

function Login() {

    const [userId, setUserId] = React.useState(''); // userId 상태 생성
    const [password, setPassword] = React.useState(''); // password 상태 생성

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 동작 방지

        const result = await login(userId, password); // 로그인 요청

        if (result.success) {
            window.alert('환영합니다.'); 
        }
        else {
            window.alert('로그인에 실패했습니다\n아이디 혹은 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div className = "login-container"> {/* CSS 클래스 추가 */}
            <h1 className = "login-title"> Login </h1> {/* CSS 클래스 추가 */}
            <form onSubmit = {handleSubmit}> {/* form 요소에 이벤트 추가 */}
                <div className = "input-group">
                    <label htmlFor = "userId"> 아이디 </label>
                    <input type = "text" id = "userId" placeholder = " " value = {userId} onChange = {(e) => setUserId(e.target.value)} required /> {/* placeholder로 빈 상태 확인 */}
                </div>

                <div className = "input-group">
                    <label htmlFor = "password"> 비밀번호 </label>
                    <input type = "password" id = "password" placeholder = " " value = {password} onChange = {(e) => setPassword(e.target.value)} required />
                </div>

                <button type = "submit"> Login </button>
                
            </form>
        </div>
    );
}

export default Login; // Login 컴포넌트 다른 파일에서 사용 가능하도록 내보내기