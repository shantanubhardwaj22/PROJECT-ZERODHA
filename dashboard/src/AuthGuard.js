import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // login nahi hai → landing page bhej do
    window.location.replace("http://localhost:3000/auth");
    return null;
  }

  return children;
};

export default AuthGuard;
