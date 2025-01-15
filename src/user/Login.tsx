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
      alert("Pleas fill in all fields");
      return;
    }
    loginWithEmailAndPassword(userData.email, userData.password);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Your email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={userData.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <label htmlFor="password">Your password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={userData.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
