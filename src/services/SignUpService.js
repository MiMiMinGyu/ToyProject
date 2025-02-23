export const signup = async (signUpId, signUpPassword, userName, nickName) => {

    try {
        console.log(signUpId + signUpPassword + userName + nickName);
    } 
    
    catch (error) {
        console.error("회원가입 요청 실패", error);
        return { success: false, message: "오류가 발생했습니다." };
    }
};