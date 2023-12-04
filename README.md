# redux toolkit 리팩토링

    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
      member: "카리나",
    };

    const memberSlice = createSlice({
      name: "member",
      initialState,
       reducers: {
        setMember: (state, action) => {
          state.member = action.payload;
        },
      },
    });

    export default memberSlice.reducer;
    export const { setMember } = memberSlice.actions;


# 로그인 회원가입 try catch문으로 에러 처리(예외 처리)

### 회원가입 예외 처리

    const signUpHandler = async () => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/register`, {
            id: inputId,
            password: inputPassword,
            nickname: nickName,
          });

          alert(`회원가입이 완료되었습니다.`);
          setIsSignup(false);
          setInputId("");
          setInputPassword("");
          setNickName("");
        } catch (error) {
          if (inputId === "" || inputPassword === "" || nickName === "") {
            alert("아이디와 비밀번호 닉네임은 필수 입력 사항입니다.");
            return false;
          }
          if (inputId <= 4 || inputId <= 10) {
            alert("아이디는 최소 4글자부터 10글자까지입니다.");
            return false;
          }
          if (inputPassword <= 4 || inputPassword <= 15) {
            alert("비밀번호는 최소 4글자부터 15글자까지입니다.");
            return false;
          }
        }
      };

### 로그인 예외 처리

    const loginHandler = async () => {
        try {
          const idResponse = await axios.post(
            `${process.env.REACT_APP_SERVER_API_URL}/login`,
            {
              id: inputId,
              password: inputPassword,
            }
          );
           if (idResponse.data.success === true) {
            navigate("/");
           }
          dispatch(signIn(idResponse));
          dispatch(signUp(idResponse.data.accessToken));
          localStorage.setItem("token", idResponse.data.accessToken);
          localStorage.setItem("userId", idResponse.data.userId);
          localStorage.setItem("avatar", idResponse.data.avatar);
          localStorage.setItem("nickname", idResponse.data.nickname);
        } catch (error) {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          setInputId("");
          setInputPassword("");
        }
       };

