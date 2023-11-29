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
} from "./StyleComponents";
import MainContext from "context/MainContext";
import { useSelector } from "react-redux";
import defaultpng from "assts/default.png";

export default function LetterList() {
  const members = useSelector((state) => state.member);
  const { letter, selectedMember } = useContext(MainContext);
  const lettersMember = letter.filter(
    (letters) => letters.writedTo === members.member
  );
  return (
    <>
      <Stlist>
        {lettersMember.length === 0 ? (
          <Stcard>
            {members.member}의 팬래터가 없습니다. 첫번째 팬레터의 주인공이
            되세요!
          </Stcard>
        ) : (
          <>
            {letter
              .filter((item) => item.writedTo === members.member)
              .map((fan) => {
                return (
                  <Link
                    to={`/Detail/${fan.id}`}
                    key={fan.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Stcard key={fan.id}>
                      <AvatarImg>
                        <img src={fan.avatar ?? defaultpng} />
                      </AvatarImg>

                      <Stlettercontentbox>
                        <Stnickname>{fan.nickname}</Stnickname>
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
