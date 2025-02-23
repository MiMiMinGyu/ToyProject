export const login = async (userId, password) => {

try {
    console.log(userId + password);
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json" }, // JSON 형태로 전송
        body: JSON.stringify({ userId, password }), // JSON 형태로 변환하여 전송
    });

    console.log(response);

    if (!response.ok) {
        throw new Error(`서버 상태 오류: ${response.status}`);
    }

    const data = await response.json(); // JSON 형태로 변환

    return data;
    } 
    
    catch (error) {
        console.error("로그인 요청 실패", error);
        return { success: false, message: "오류가 발생했습니다." };
    }
};