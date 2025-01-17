import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectContext, ProjectProvider } from "../../contexts/ProjectContext";
import Login from "../../user/Login";
import Register from "../../user/Register";
import Home from "../../pages/home/Home";

function App() {
  return (
    <ProjectContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ProjectContext>
  );
}

export default App;
