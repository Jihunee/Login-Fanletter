import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "redux/modules/auth";
import { signIn } from "redux/modules/user";
import {
  Warpper,
  LoginBox,
  LoginTitle,
  InputBox,
  Button,
} from "styledComponents/loginStyled";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [isSignUp, setIsSignup] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <Warpper>
      <LoginBox>
        <LoginTitle>{isSignUp ? "회원가입" : "로그인"}</LoginTitle>
        {isSignUp ? (
          <>
            <form>
              <InputBox>
                <input
                  value={inputId}
                  onChange={(e) => {
                    setInputId(e.target.value);
                  }}
                  type="text"
                  placeholder="아이디 (4~10글자)"
                />
                <input
                  value={inputPassword}
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="비밀번호 (4~15글자)"
                />
                <input
                  value={nickName}
                  onChange={(e) => {
                    setNickName(e.target.value);
                  }}
                  type="text"
                  placeholder="닉네임을 입력해주세요"
                />
              </InputBox>
              <Button
                onClick={() => {
                  setIsSignup(false);
                  setInputId("");
                  setInputPassword("");
                }}
              >
                로그인
              </Button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={loginHandler}>
              <InputBox>
                <input
                  value={inputId}
                  onChange={(e) => {
                    setInputId(e.target.value);
                  }}
                  type="text"
                  placeholder="아이디 (4~10글자)"
                />
                <input
                  value={inputPassword}
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="비밀번호 (4~15글자)"
                />
              </InputBox>
            </form>
          </>
        )}

        {isSignUp ? null : (
          <div>
            <Button
              onClick={() => {
                loginHandler();
              }}
            >
              로그인
            </Button>
          </div>
        )}
        {isSignUp ? (
          <div>
            <Button onClick={signUpHandler}>회원가입</Button>
          </div>
        ) : null}

        {isSignUp ? null : (
          <div>
            <Button
              onClick={() => {
                setIsSignup(true);
              }}
            >
              회원가입
            </Button>
          </div>
        )}
      </LoginBox>
    </Warpper>
  );
}

export default Login;
