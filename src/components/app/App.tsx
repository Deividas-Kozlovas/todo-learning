import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../user/Login";
import Register from "../../user/Register";
import Home from "../../pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
