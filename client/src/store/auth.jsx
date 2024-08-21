// /* eslint-disable no-unused-vars */
// import {  createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const   AuthProvider = ({children }) =>{

//     const [token, setToken] = useState(localStorage.getItem("token"));

//     const storeTokenInLS = (serverToken) =>{
//         return localStorage.setItem("Token", serverToken);
//     };

//     let isLoggedIn = !!token;   

//     // console.log("islogin",isLoggedIn);

//     const LogoutUser = () => {
//         setToken("");
//         return localStorage.removeItem("token")
//     };
//     return(
//         <AuthContext.Provider value={{  isLoggedIn, storeTokenInLS, LogoutUser}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = () =>{
//     const AuthContextValue = useContext(AuthContext);
//     if(!AuthContextValue) {
//         throw new Error("useAuth used outside of the provider");
//     }
//     return AuthContextValue;
// }



import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const authorizationToken = `Bearer ${token}`

  const [servicee, setServicee] = useState([]);

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

 const isLoggedIn = !!token;
console.log("log",isLoggedIn)
  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null); // Clear the token state
  };
  const userAuthentication = async() => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user",{
        method:"GET",
        headers:{
          Authorization:authorizationToken

        },
      });

      if(response.ok){
        const data = await response.json();
        console.log("user datadata",data.userdate);
        setUser(data.userdate);
        setIsLoading(false);
      } else{
        setIsLoading(false);
      }
      
    } catch (error) {
      console.log("Error fetching user data");
      
    }

  };


  const getServices = async () =>{
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
        method:"GET",
      });

      if(response.ok){
        const data = await response.json();
        console.log(data.msg)
        setServicee(data.msg)
      }
      
    } catch (error) {
      console.log(`services fronted error is${error}`);
      
    }
  }
   useEffect(() => {
    getServices();
    userAuthentication();
   },[]);

  return (
    <AuthContext.Provider 
    value={{ isLoggedIn, 
    storeTokenInLS, 
    logoutUser, 
    user, 
    servicee,
    authorizationToken,
    isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
