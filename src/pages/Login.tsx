import { useEffect } from "react";
import { client } from "../lib/directus";
import { useDirectusAuth } from "../hooks/useDirectusAuth";

const Login = () => {
  const { isLoggedIn } = useDirectusAuth();

  useEffect(() => {
    const refreshSession = async () => {
      try {
        await client.refresh();
      } catch (error) {
        console.error("Failed to refresh session:", error);
      }
    };

    refreshSession();
  }, []); // Runs once when component mounts

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h1>Login</h1>

      <a href="https://buatpoc-dir.q4ml5v.easypanel.host/auth/login/google?redirect=http://localhost:3000/login">
        Login with Google
      </a>

      {isLoggedIn === null && <p>Checking login status...</p>}
      {isLoggedIn === true && <p>You are logged in!</p>}
      {isLoggedIn === false && <p>You are not logged in</p>}
    </div>
  );
};

export default Login;
