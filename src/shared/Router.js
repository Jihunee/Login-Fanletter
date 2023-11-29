import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { fanletter } from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const Router = () => {
  const [letter, setLetter] = useState(fanletter);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={<Home letter={letter} setLetter={setLetter} />}
        />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route
          path="/Detail/:id"
          element={<Detail letter={letter} setLetter={setLetter} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
