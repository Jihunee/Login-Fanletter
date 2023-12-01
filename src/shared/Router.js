import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Router = () => {
  const [letter, setLetter] = useState(null);

  const fetchLetters = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/letters`
    );
    setLetter(data);
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  const auth = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {auth ? (
          <>
            <Route
              path="/"
              element={<Home letter={letter} setLetter={setLetter} />}
            />
            <Route
              path="/profile/"
              element={<Profile letter={letter} setLetter={setLetter} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail letter={letter} setLetter={setLetter} />}
            />
          </>
        ) : null}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
