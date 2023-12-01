import styled from "styled-components";

export const ProfileNavar = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileNavarButtons = styled.div`
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

export const CardBtn = styled.button`
  font-size: 20px;
  margin-left: 20px;
  padding: 10px 20px;
  border: 0;
  border-radius: 15px;
  background-color: salmon;
  cursor: pointer;
  color: white;
  font-family: "Cafe24";
  transition: all 0.2s ease-in-out;
  width: 150px;
  margin-right: 20px;
  &:hover {
    background-color: white;
    color: salmon;
    transform: scale(1.2);
  }
`;

export const Warpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
export const ProfileCard = styled.div`
  border: 5px solid blanchedalmond;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  box-shadow: -5px -5px 30px 5px yellow, 5px 5px 30px 5px blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
export const ImgFigure = styled.div`
  margin: 50px 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;
export const CardInputBox = styled.div`
  font-family: "Cafe24";
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  & input {
    font-size: 20px;
    padding: 10px;
    width: 200px;
    border: 0;
    text-align: center;
    border-radius: 20px;
    outline: 0;
    font-family: "Cafe24";
  }
  & h1 {
    font-size: 30px;
  }
  & p {
    font-size: 20px;
  }
`;

export const EditImg = styled.label`
  margin: 50px 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  text-align: center;
  cursor: pointer;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  & input {
    display: none;
  }
`;
