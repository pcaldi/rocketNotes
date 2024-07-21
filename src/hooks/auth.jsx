/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ email: 'paulo@email.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
