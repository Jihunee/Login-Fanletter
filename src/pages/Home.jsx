import React, { useEffect, useState } from "react";

import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";
import MainContext from "context/MainContext";
import axios from "axios";

function Home({ letter, setLetter }) {
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [inputMember, setInputMember] = useState("카리나");
  const [selectedMember, setSelectedMember] = useState("");

  // const responseData = async (accessToken) => {
  //   try {
  //     const response = await axios.get(
  //       `https://moneyfulpublicpolicy.co.kr/user`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   responseData();
  // }, []);

  return (
    <MainContext.Provider
      value={{
        inputMember,
        setInputMember,
        nickname,
        setNickName,
        content,
        setContent,
        letter,
        setLetter,
        selectedMember,
        setSelectedMember,
      }}
    >
      <Header />
      <Form />
      <LetterList />
    </MainContext.Provider>
  );
}

export default Home;
