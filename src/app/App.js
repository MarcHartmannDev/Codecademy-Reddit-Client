import "./app.scss";
import Navbar from "../features/navbar/navbar";
import Main from "../features/main/main";
import { Routes, Route } from "react-router-dom";
import CurrentPost from "../features/currentPost/currentPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="post/:id" element={<CurrentPost />} />
      </Routes>
    </div>
  );
}

export default App;
