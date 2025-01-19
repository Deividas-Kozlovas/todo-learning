import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "../../contexts/ProjectContext";
import Login from "../../user/Login";
import Register from "../../user/Register";
import Home from "../../pages/home/Home";

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
