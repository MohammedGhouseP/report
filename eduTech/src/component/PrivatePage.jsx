import { AuthContext } from "../context/AuthContextProvider.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export const PrivatePage=({ children })=> {
    const { authDetail } = useContext(AuthContext);

    if (!authDetail?.isLoggedIn) { // if user is not authorised then redirect to login not other pages
      return <Navigate to="/login" />;
    }
    return children;
  }