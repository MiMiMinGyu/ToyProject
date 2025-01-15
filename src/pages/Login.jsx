import '../styles/Login.css';

function Login() {
    return (
        <div className = "login-container"> {/* CSS 클래스 추가 */}
            <h1 className = "login-title"> Login </h1> {/* CSS 클래스 추가 */}
            <form>
                <div className = "input-group">
                    <label htmlFor = "username"> 아이디 </label>
                    <input type = "text" id = "username" placeholder = " " required /> {/* placeholder로 빈 상태 확인인 */}
                </div>

                <div className = "input-group">
                    <label htmlFor = "password"> 비밀번호 </label>
                    <input type = "password" id = "password" placeholder = " " required />
                </div>

                <button type = "submit"> Login </button>
                
            </form>
        </div>
    ); // 집 가고싶다 알바 가기 싫다 시발
}

export default Login; // Login 컴포넌트 다른 파일에서 사용 가능하도록 내보내기