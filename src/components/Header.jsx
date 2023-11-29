import React, { useContext, useEffect } from "react";
import { StHeader, MemberButtons, MemberBtn } from "./StyleComponents";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/member";
import { useNavigate } from "react-router-dom";
import MainContext from "context/MainContext";

function Header() {
  const navigate = useNavigate();
  const members = useSelector((state) => state.member);
  const { selectedMember, setSelectedMember } = useContext(MainContext);

  useEffect(() => {
    setSelectedMember(members.member);
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <button>내프로필</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        로그아웃
      </button>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <MemberButtons>
          <MemberBtn
            isSelected={selectedMember === "카리나"}
            onClick={() => {
              dispatch(setMember("카리나"));
              setSelectedMember("카리나");
            }}
          >
            카리나
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "윈터"}
            onClick={() => {
              dispatch(setMember("윈터"));
              setSelectedMember("윈터");
            }}
          >
            윈터
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "지젤"}
            onClick={() => {
              dispatch(setMember("지젤"));
              setSelectedMember("지젤");
            }}
          >
            지젤
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "닝닝"}
            onClick={() => {
              dispatch(setMember("닝닝"));
              setSelectedMember("닝닝");
            }}
          >
            닝닝
          </MemberBtn>
        </MemberButtons>
      </StHeader>
    </>
  );
}

export default Header;
