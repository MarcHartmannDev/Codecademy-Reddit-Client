import "./app.scss";
import Navbar from "../features/navbar/navbar";
import Main from "../features/main/main";
import { Routes, Route } from "react-router-dom";
import { deleteToken, getToken, selectExpires } from "./appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const expires = useSelector(selectExpires);

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  useEffect(() => {
    const deleteTimer = setTimeout(() => {
      dispatch(deleteToken());
    }, expires * 1000);
    return () => {
      clearTimeout(deleteTimer);
    };
  }, [dispatch, expires]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
