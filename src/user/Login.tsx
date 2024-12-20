import { useState } from "react";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  function handleChange() {}

  function submitHandler() {}

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
