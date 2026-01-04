import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:3002/auth/signup", {
        name: email.split("@")[0], // simple name logic
        email,
        password,
      });

      setSuccess("Signup successful! Please login.");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      setSuccess("");
    }
  };

  return (
    <>
      <h4 className="mb-3 text-center">Create your account</h4>

      {error && (
        <p className="text-danger text-center" style={{ fontSize: "14px" }}>
          {error}
        </p>
      )}

      {success && (
        <p className="text-success text-center" style={{ fontSize: "14px" }}>
          {success}
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
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleSignup}>
        Signup
      </button>

      <p className="text-muted text-center mt-3" style={{ fontSize: "14px" }}>
        New user? Signup to start investing
      </p>
    </>
  );
}

export default Signup;
