import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Stlist,
  Stcard,
  Stlettercontentbox,
  Stnickname,
  Staddtime,
  StletterContent,
  AvatarImg,
} from "../styledComponents/StyleComponents";
import MainContext from "context/MainContext";
import { useSelector } from "react-redux";
import testjpg from "assts/test.jpg";

export default function LetterList() {
  const members = useSelector((state) => state.member);
  const { letter } = useContext(MainContext);
  const lettersMember = letter?.filter(
    (letters) => letters.writedTo === members.member
  );

  const nickname = localStorage.getItem("nickname");

  return (
    <>
      <Stlist>
        {lettersMember?.length === 0 ? (
          <Stcard>
            {members.member}의 팬래터가 없습니다. 첫번째 팬레터의 주인공이
            되세요!
          </Stcard>
        ) : (
          <>
            {letter
              ?.filter((item) => item.writedTo === members.member)
              ?.map((fan) => {
                return (
                  <Link
                    to={`/Detail/${fan.id}`}
                    key={fan.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Stcard key={fan.id}>
                      <AvatarImg>
                        <img src={fan.avatar || testjpg} />
                      </AvatarImg>

                      <Stlettercontentbox>
                        <Stnickname>{fan.nickname || nickname}</Stnickname>
                        <br />
                        <Staddtime>
                          {new Date(fan.createdAt).toLocaleDateString("ko", {
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </Staddtime>
                        <br />
                        <StletterContent>{fan.content}</StletterContent>
                      </Stlettercontentbox>
                    </Stcard>
                  </Link>
                );
              })}
          </>
        )}
      </Stlist>
    </>
  );
}
