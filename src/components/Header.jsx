import React, { useContext, useEffect } from "react";
import {
  StHeader,
  MemberButtons,
  MemberBtn,
} from "../styledComponents/StyleComponents";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/member";
import { useNavigate } from "react-router-dom";
import MainContext from "context/MainContext";
import { Navar, NavarButtons } from "styledComponents/navvarStyled";

function Header() {
  const navigate = useNavigate();
  const members = useSelector((state) => state.member);
  const { selectedMember, setSelectedMember } = useContext(MainContext);

  const logoutHandler = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (!answer) return;

    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    setSelectedMember(members.member);
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      <Navar>
        <NavarButtons>
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            내프로필
          </button>
          <button onClick={logoutHandler}>로그아웃</button>
        </NavarButtons>
      </Navar>

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
