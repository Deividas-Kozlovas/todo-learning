import { useState } from "react";
import { registerWithEmailAndPassword } from "../services/AuthServices";

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
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Your name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        name="name"
        onChange={handleChange}
        value={userData.name}
      />
      <label htmlFor="email">Tour email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={userData.email}
      />
      <label htmlFor="password">Your password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
