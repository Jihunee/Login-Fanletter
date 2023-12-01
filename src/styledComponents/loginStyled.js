import styled from "styled-components";

export const Warpper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LoginBox = styled.div`
  border: 10px solid blanchedalmond;
  text-align: center;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 30px;
`;

export const LoginTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
  font-family: "Cafe24";
  color: blanchedalmond;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 70px;
  & input {
    font-family: "Cafe24";
    font-size: 30px;
    border-radius: 10px;
    padding: 10px;
    border: 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  width: 500px;
  height: 60px;
  padding: 10px;
  border: 0;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: salmon;
  cursor: pointer;
  color: white;
  font-family: "Cafe24";
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: white;
    color: salmon;
    transform: scale(1.08);
  }
`;
