import React, { useContext } from "react";
import uuid from "react-uuid";
import {
  Stform,
  Stinputbox,
  Sttextarea,
  Stselect,
  StaddBtnbox,
  StBtn,
} from "../styledComponents/StyleComponents";
import MainContext from "context/MainContext";

import testjpg from "assts/test.jpg";
import axios from "axios";

export default function Form() {
  const {
    inputMember,
    setInputMember,
    content,
    setContent,
    setNickName,
    letter,
    setLetter,
  } = useContext(MainContext);

  const nickname = localStorage.getItem("nickname");
  const userId = localStorage.getItem("userId");
  const avatar = localStorage.getItem("avatar");

  const addLetter = async (newletter) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/letters`, newletter);
    setLetter([newletter, ...letter]);
    setNickName("");
    setContent("");
  };

  return (
    <>
      <Stform>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (content === "") {
              alert("내용을 입력해주세요");
              return false;
            }
            const newletter = {
              id: uuid(),
              nickname: nickname,
              content,
              writedTo: inputMember,
              createdAt: new Date(),
              avatar: avatar === "null" ? testjpg : avatar,
              userId: userId,
            };
            addLetter(newletter);
          }}
        >
          <Stinputbox>
            닉네임
            <p>{nickname}</p>
            내 용
            <Sttextarea
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="최대 100자까지 작성 할 수 있습니다."
              maxLength={100}
            />
            누구에게 보낼까요 ?
            <Stselect
              onChange={(e) => {
                setInputMember(e.target.value);
              }}
            >
              <option value="카리나">카리나</option>
              <option value="윈터">윈터</option>
              <option value="지젤">지젤</option>
              <option value="닝닝">닝닝</option>
            </Stselect>
          </Stinputbox>

          <StaddBtnbox>
            <StBtn type="submit">팬레터 등록</StBtn>
          </StaddBtnbox>
        </form>
      </Stform>
    </>
  );
}
