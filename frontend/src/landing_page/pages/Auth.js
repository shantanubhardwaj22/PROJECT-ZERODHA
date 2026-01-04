import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}>
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/signup.png"
            alt="Auth"
            className="img-fluid"
            style={{ maxWidth: "85%", marginTop: "40px" }}
          />
        </div>

        {/* RIGHT CARD */}
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            <div className="d-flex justify-content-center mb-4">
              <button
                className={`btn me-2 ${
                  isLogin ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setIsLogin(true)}>
                Login
              </button>

              <button
                className={`btn ${
                  !isLogin ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setIsLogin(false)}>
                Signup
              </button>
            </div>

            {isLogin ? <Login /> : <Signup />}
          </div>

          {/* BACK TO HOME */}
          <div className="text-center mt-3">
  <Link
    to="/"
    className="btn btn-light"
    style={{ border: "1px solid #ddd" }}
  >
    ← Back to Home
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}

export default Auth;
