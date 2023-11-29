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
} from "components/StyleComponents";
import { useState } from "react";
import defaultpng from "assts/default.png";

function Detail({ letter, setLetter }) {
  const params = useParams().id;
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  const foundData = letter.find((item) => {
    return item.id === params;
  });

  const { nickname, writedTo, createdAt, content, avatar } = foundData;

  return (
    <div>
      <HomeBtn
        onClick={() => {
          navigate("/Home");
        }}
      >
        홈으로
      </HomeBtn>
      <CardBox>
        <CardBoxTop>
          <DetailAvatarImg>
            <img src={avatar ?? defaultpng} />
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
        <CardBtn>
          {isEditing ? (
            <StBtn
              onClick={() => {
                if (!editingText) return alert("수정된 부분이 없습니다.");
                setIsEditing(false);
                const answer = window.confirm("이대로 수정하시겠습니까?");
                if (!answer) return;

                const newLetter = letter.map((item) => {
                  if (item.id === params) {
                    return { ...item, content: editingText };
                  } else {
                    return item;
                  }
                });
                navigate("/Home");
                setLetter(newLetter);
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
                  const answer = window.confirm("정말로 삭제하시겠습니까?");
                  if (!answer) return;

                  const filterdeData = letter.filter(
                    (item) => item.id !== params
                  );
                  setLetter(filterdeData);

                  navigate("/Home");
                }}
              >
                삭제
              </StBtn>
            </>
          )}
        </CardBtn>
      </CardBox>
    </div>
  );
}

export default Detail;
