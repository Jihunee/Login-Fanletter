import styled from "styled-components";

export const Navar = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const NavarButtons = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  & button {
    font-size: 20px;
    padding: 10px 20px;
    border: 0;
    border-radius: 15px;
    background-color: salmon;
    cursor: pointer;
    color: white;
    font-family: "Cafe24";
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: white;
      color: salmon;
      transform: scale(1.2);
    }
  }
`;
