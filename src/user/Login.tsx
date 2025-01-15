import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { loginWithEmailAndPassword } from "../services/AuthServices";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [loading, user]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      alert("Please fill in all fields");
      return;
    }
    loginWithEmailAndPassword(userData.email, userData.password);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={submitHandler} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            placeholder="Enter your email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            placeholder="Enter your password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
