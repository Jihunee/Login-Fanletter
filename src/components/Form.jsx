import React, { useContext } from "react";
import uuid from "react-uuid";
import {
  Stform,
  Stinputbox,
  Stinput,
  Sttextarea,
  Stselect,
  StaddBtnbox,
  StBtn,
} from "./StyleComponents";
import MainContext from "context/MainContext";

export default function Form() {
  const {
    inputMember,
    setInputMember,
    content,
    setContent,
    nickname,
    setNickName,
    letter,
    setLetter,
  } = useContext(MainContext);

  return (
    <>
      <Stform>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (nickname === "") {
              alert("닉네임을 입력해주세요");
              return false;
            } else if (content === "") {
              alert("내용을 입력해주세요");
              return false;
            }
            const newletter = {
              id: uuid(),
              nickname,
              content,
              writedTo: inputMember,
              createdAt: new Date(),
              avatar: null,
            };
            setLetter([newletter, ...letter]);
            setNickName("");
            setContent("");
          }}
        >
          <Stinputbox>
            닉네임
            <Stinput
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickName(e.target.value);
              }}
              placeholder="최대 20글자까지 작성 할 수 있습니다."
              maxLength={20}
            />
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
