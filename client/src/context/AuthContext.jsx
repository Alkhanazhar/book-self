/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Auth = createContext();

export default function AuthProvider({ children }) {
  const initialStateUser = localStorage.getItem("Users");
  const [user, setUser] = useState(
    initialStateUser ? JSON.parse(initialStateUser) : undefined
  );

  return <Auth.Provider value={[user, setUser]}>{children}</Auth.Provider>;
}
