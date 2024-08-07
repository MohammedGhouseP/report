import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const toast = useToast();

  const [authDetail, setAuthDetail] = useState({
    isLoggedIn: false,
    token: null,
  });
  const login = (token) => {
    setAuthDetail({
      isLoggedIn: true,
      token: token,
    });
  };
  
  const logout = () => {
    setAuthDetail({
      isLoggedIn: false,
      token: null,
    });

    toast({
      title: "Thanks for visiting.",
      description: "Bye Bye.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });


    const navigate = useNavigate();
    if(authDetail?.isLoggedIn){
      navigate("/tickets");
    }

   
  };
  return (
    <AuthContext.Provider value={{ authDetail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
