import { useNavigate, useParams } from "react-router-dom";
import {
  HomeBtn,
  StBtn,
  CardBox,
  CardBoxTop,
  NickName,
  Time,
  Writed,
  TextBox,
  EditTextBox,
  CardBtn,
  DetailAvatarImg,
} from "styledComponents/StyleComponents";
import { useState } from "react";
import testjpg from "assts/test.jpg";
import { useSelector } from "react-redux";
import axios from "axios";

function Detail({ letter, setLetter }) {
  const params = useParams().id;
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const userId = localStorage.getItem("userId");

  const foundData = letter.find((item) => {
    return item.id === params;
  });

  const { nickname, writedTo, createdAt, content, avatar } = foundData;

  // const idInformation = localStorage.getItem("아이디 정보");
  // const idResponse = JSON.parse(idInformation);
  // const idData = idResponse.data;

  const removeLetterHandelr = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/letters/${id}`);
    const filterdeData = letter.filter((item) => {
      return item.id !== id;
    });
    setLetter(filterdeData);
  };

  const editLetterHandler = async () => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/letters/${params}`, {
      content: editingText,
    });
    const newLetter = letter.map((item) => {
      if (item.id === params) {
        return { ...item, content: editingText };
      } else {
        return item;
      }
    });
    setLetter(newLetter);
  };

  return (
    <div>
      <HomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </HomeBtn>
      <CardBox>
        <CardBoxTop>
          <DetailAvatarImg>
            <img src={avatar ?? testjpg} />
          </DetailAvatarImg>
          <NickName>{nickname}</NickName>
          <Time>
            {new Date(createdAt).toLocaleDateString("ko", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </Time>
        </CardBoxTop>
        <Writed>To : {writedTo}</Writed>
        {isEditing ? (
          <EditTextBox
            defaultValue={content}
            onChange={(e) => {
              setEditingText(e.target.value);
            }}
          />
        ) : (
          <TextBox>{content}</TextBox>
        )}

        <>
          <CardBtn>
            {userId === foundData.userId ? (
              <>
                {isEditing ? (
                  <StBtn
                    onClick={() => {
                      if (!editingText) return alert("수정된 부분이 없습니다.");
                      setIsEditing(false);
                      const answer = window.confirm("이대로 수정하시겠습니까?");
                      if (!answer) return;

                      editLetterHandler();
                      navigate("/");
                    }}
                  >
                    수정완료
                  </StBtn>
                ) : (
                  <>
                    <StBtn
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      수정
                    </StBtn>
                    <StBtn
                      onClick={() => {
                        const answer =
                          window.confirm("정말로 삭제하시겠습니까?");
                        if (!answer) return;

                        removeLetterHandelr(params);

                        navigate("/");
                      }}
                    >
                      삭제
                    </StBtn>
                  </>
                )}
              </>
            ) : null}
          </CardBtn>
        </>
      </CardBox>
    </div>
  );
}

export default Detail;
