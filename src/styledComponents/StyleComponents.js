import styled from "styled-components";

export const StHeader = styled.header`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 60px;

  color: saddlebrown;
  font-family: "Cafe24";
`;

export const MemberButtons = styled.div`
  padding: 30px 0;
  margin-top: 50px;
  width: 400px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: transparent;
`;

export const StBtn = styled.button`
  font-size: 20px;
  padding: 10px;
  border: 0;
  border-radius: 15px;
  background-color: salmon;
  cursor: pointer;
  color: white;
  font-family: "Cafe24";
  transition: all 0.2s ease-in-out;
  margin-right: 10px;
  &:hover {
    background-color: white;
    color: salmon;
    transform: scale(1.2);
  }
`;

export const MemberBtn = styled.div`
  padding: 10px;
  font-size: 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.isSelected ? "salmon" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "salmon")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "salmon" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "salmon")};
    transform: scale(1.3);
  }
`;

export const Stform = styled.div`
  width: 500px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: transparent;
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Cafe24";
`;

export const AvatarImg = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Stinputbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  gap: 10px;
  width: 400px;
  & p {
    font-size: 30px;
    color: salmon;
  }
`;

export const Stinput = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  font-family: "Cafe24";
`;

export const Sttextarea = styled.textarea`
  resize: none;
  height: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  font-family: "Cafe24";
`;

export const StaddBtnbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Stlist = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Stcard = styled.div`
  border: 5px solid yellow;
  margin: 10px;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-family: "Cafe24";
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StletterContent = styled.div`
  width: 350px;
  margin-top: 10px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
`;

export const Stlettercontentbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Stnickname = styled.h1`
  font-size: 25px;
`;

export const Staddtime = styled.p`
  font-size: 15px;
`;

export const Stselect = styled.select`
  width: 150px;
  font-size: 20px;
  margin: 0 auto;
  border: 0;
  outline: 0;
  border-radius: 5px;
  font-family: "Cafe24";
`;

// 상세페이지 영역

export const HomeBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 20px;
  padding: 10px;
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
`;

export const CardBox = styled.div`
  width: 750px;
  height: 480px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 10px;
  border-radius: 20px;
`;

export const CardBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Cafe24";
`;

export const DetailAvatarImg = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Time = styled.p`
  font-size: 20px;
`;

export const NickName = styled.p`
  font-size: 30px;
  margin-left: 20px;
  margin-top: 40px;
`;

export const Writed = styled.p`
  margin-top: 60px;
  margin-left: 20px;
  font-size: 20px;
  font-family: "Cafe24";
`;

export const TextBox = styled.p`
  display: block;
  line-height: 30px;
  margin-top: 10px;
  width: 700px;
  height: 200px;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  font-family: "Cafe24";
`;

export const EditTextBox = styled.textarea`
  resize: none;
  margin-top: 10px;
  width: 700px;
  height: 200px;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  font-family: "Cafe24";
`;

export const CardBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 30px;
  margin-right: 60px;
`;
