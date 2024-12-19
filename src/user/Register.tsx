import { useState } from "react";

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

  return (
    <form>
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
    </form>
  );
};

export default Register;
