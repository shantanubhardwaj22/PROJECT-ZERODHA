import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const backendUrl =
    process.env.REACT_APP_BACKEND_URL ||
    "https://project-zerodha-1-46fz.onrender.com";
  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;

  const handleLogin = async () => {
    try {
      if (!backendUrl) {
        setError("Backend URL is not configured.");
        return;
      }
      const res = await axios.post(`${backendUrl}/auth/login`, {
        email,
        password,
      });

      // token save
      localStorage.setItem("token", res.data.token);

      // dashboard redirect
      if (dashboardUrl) window.location.replace(dashboardUrl);

    } catch (err) {
      setError(err.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <>
      <h4 className="mb-3 text-center">Welcome back</h4>

      {error && (
        <p className="text-danger text-center" style={{ fontSize: "14px" }}>
          {error}
        </p>
      )}

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>

      <p className="text-muted text-center mt-3" style={{ fontSize: "14px" }}>
        Existing user? Login to continue
      </p>
    </>
  );
}

export default Login;
