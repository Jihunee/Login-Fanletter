import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Warpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginBox = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [isSignUp, setIsSignup] = useState(false);

  const navigate = useNavigate();

  const signUpHandler = async () => {
    try {
      await axios.post(" https://moneyfulpublicpolicy.co.kr/register", {
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
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id: inputId,
          password: inputPassword,
        }
      );
      if (idResponse.data.success === true) {
        navigate("/Home");
      }
    } catch (error) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      setInputId("");
      setInputPassword("");
    }
  };

  return (
    <Warpper>
      <LoginBox>
        <p>{isSignUp ? "회원가입" : "로그인"}</p>
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
                <button
                  onClick={() => {
                    setIsSignup(false);
                    setInputId("");
                    setInputPassword("");
                  }}
                >
                  로그인
                </button>
              </InputBox>
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
          <>
            <button
              onClick={() => {
                loginHandler();
              }}
            >
              로그인
            </button>
          </>
        )}
        {isSignUp ? (
          <>
            <button onClick={signUpHandler}>회원가입</button>
          </>
        ) : null}

        {isSignUp ? null : (
          <>
            <button
              onClick={() => {
                setIsSignup(true);
              }}
            >
              회원가입
            </button>
          </>
        )}
      </LoginBox>
    </Warpper>
  );
}

export default Login;
