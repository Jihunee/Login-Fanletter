import React, { useState } from "react";

import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";
import MainContext from "context/MainContext";
import { useSelector } from "react-redux";

function Home({ letter, setLetter }) {
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [inputMember, setInputMember] = useState("카리나");
  const [selectedMember, setSelectedMember] = useState("");

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
