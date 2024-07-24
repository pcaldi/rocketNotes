/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {

      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      // Salvo o user no localStorage, passando o user de objeto para texto.
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      // Salvo o token no localStorage, como token já é uma string não preciso converter.
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token })


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro ao fazer o login. Tente novamente.");

      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user), // Converto o user para um objeto novamente utilizando o parse.
        token
      });
    }


  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, };
