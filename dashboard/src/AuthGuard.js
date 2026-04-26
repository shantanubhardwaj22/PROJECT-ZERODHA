import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem("token");
  const frontendAuthUrl = process.env.REACT_APP_FRONTEND_AUTH_URL;

  if (!token) {
    // login nahi hai → landing page bhej do
    window.location.replace(frontendAuthUrl);
    return null;
  }

  return children;
};

export default AuthGuard;
