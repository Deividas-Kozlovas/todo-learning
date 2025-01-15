import { logoutUser } from "../../services/AuthServices";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, user] = useAuthState(auth);
  const navigator = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigator("/");
  }, [loading, user]);

  const logout = async () => {
    await logoutUser();
    navigator("/");
  };
  return (
    <div>
      welcome to homepage
      <button onClick={logout}>Logout user</button>
    </div>
  );
};

export default Home;
