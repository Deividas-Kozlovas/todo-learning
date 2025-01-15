import { useState } from "react";
import { registerWithEmailAndPassword } from "../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
  });

  const [error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      alert("Please fill in all fields.");
      return;
    }
    registerWithEmailAndPassword(
      userData.name,
      userData.email,
      userData.password
    );
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      {error && <p className="text-danger">{error.message}</p>}
      <form onSubmit={submitHandler} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
