import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // BrowserRouter: 라우터를 제공하는 컴포넌트, URL 변화 감지, 페이지 렌더링 등
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FreeBoard from './pages/board/FreeBoard';
import NoticeBoard from './pages/board/NoticeBoard';
import QuestionBoard from './pages/board/QuestionBoard';
import SuggestionBoard from './pages/board/SuggestionBoard';

function App() { // 최상위 컴포넌트, 라우팅 설정 관리
  return (
    <Router> {/* 경로 감지, 라우터의 기반 설정 */}
      <Routes> {/* 특정 경로와 그에 대응하는 컴포넌트 정의 (URL 경로에 따라 어떤 컴포넌트를 렌더링 할지 지정) */}
        <Route path="/" element={<Home />} /> {/* path ="/"에서 /는 기본 홈 경로, 로컬로 접속하면 해당 경로 활성화 */}
        <Route path="/login" element={<Login />} /> {/* /login으로 접속, Login 컴포넌트 렌더링 */}
        <Route path="/signup" element={<SignUp />} /> {/* /signup 접속, Register 컴포넌트 렌더링 */}
        <Route path="/board/free" element={<FreeBoard />} /> {/* /board/free 접속, FreeBoard 컴포넌트 렌더링 */}
        <Route path="/board/notice" element={<NoticeBoard />} /> {/* /board/notice 접속, NoticeBoard 컴포넌트 렌더링 */}
        <Route path="/board/question" element={<QuestionBoard />} /> {/* /board/question 접속, QuestionBoard 컴포넌트 렌더링 */}
        <Route path="/board/suggestion" element={<SuggestionBoard />} /> {/* /board/suggestion 접속, SuggestionBoard 컴포넌트 렌더링 */}
      </Routes>
    </Router>
  );
}

export default App; // App 컴포넌트 다른 파일에서 사용 가능하도록 내보내기