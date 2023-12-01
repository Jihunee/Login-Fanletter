import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileNavar,
  ProfileNavarButtons,
  ProfileCard,
  CardBtn,
  Warpper,
  ImgFigure,
  CardInputBox,
  EditImg,
} from "styledComponents/profileStyled";
import testjpg from "assts/test.jpg";
import axios from "axios";

function Profile({ letter, setLetter }) {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");
  const userId = localStorage.getItem("userId");
  const avatar = localStorage.getItem("avatar");

  const [imgfile, setImgfile] = useState(avatar === "null" ? testjpg : avatar);
  const imgRef = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState("");

  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  const editUserInfoHandler = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_SERVER_API_URL}/profile`,
        {
          avatar: imgfile,
          nickname: editedText,
        },
        {
          headers: headers,
        }
      );
      console.log(response);
      const changed = localStorage.setItem("nickname", editedText);
      localStorage.setItem("avatar", imgfile);
      setEditedText(changed);
      setLetter(
        letter.map((item) => {
          if (item.userId === userId) {
            return { ...item, nickname: editedText, avatar: imgfile };
          } else {
            return item;
          }
        })
      );

      // 찾은 편지의 ID를 사용하여 업데이트
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/letters/${userId}`,
        {
          nickname: editedText,
          avatar: imgfile,
        }
      );
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgfile(reader.result);
    };
  };

  return (
    <>
      <ProfileNavar>
        <CardBtn
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </CardBtn>
        <ProfileNavarButtons>
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            내프로필
          </button>
          <button
            onClick={() => {
              const answer = window.confirm("로그아웃 하시겠습니까?");
              if (!answer) return;

              localStorage.clear();
              navigate("/login");
            }}
          >
            로그아웃
          </button>
        </ProfileNavarButtons>
      </ProfileNavar>
      <Warpper>
        <ProfileCard>
          {isEdit ? (
            <>
              <EditImg>
                <img src={imgfile ? imgfile : avatar} />
                <input type="file" onChange={saveImgFile} ref={imgRef} />
              </EditImg>
            </>
          ) : (
            <>
              <ImgFigure>
                <img src={avatar === "null" ? testjpg : avatar} />
              </ImgFigure>
            </>
          )}

          <CardInputBox>
            {isEdit ? (
              <>
                <input
                  defaultValue={nickname}
                  onChange={(e) => {
                    setEditedText(e.target.value);
                  }}
                  type="text"
                />
              </>
            ) : (
              <>
                <h1>{nickname}</h1>
              </>
            )}

            <p>{userId}</p>
          </CardInputBox>
          <div>
            {isEdit ? (
              <>
                <CardBtn
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  취소
                </CardBtn>
                <CardBtn
                  onClick={() => {
                    if (!editedText) return alert("수정된 부분이 없습니다.");
                    setEditedText(false);
                    const answer = window.confirm("이대로 수정하시겠습니까?");
                    if (!answer) return;

                    editUserInfoHandler();
                    setIsEdit(false);
                  }}
                >
                  수정완료
                </CardBtn>
              </>
            ) : (
              <>
                <CardBtn
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  수정
                </CardBtn>
              </>
            )}
          </div>
        </ProfileCard>
      </Warpper>
    </>
  );
}

export default Profile;
