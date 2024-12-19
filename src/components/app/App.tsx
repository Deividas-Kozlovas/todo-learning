import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../user/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
