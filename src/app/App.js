import "./app.scss";
import Navbar from "../components/navbar/navbar";
import Main from "../components/main/main";
import { Routes, Route } from "react-router-dom";

function App() {
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
