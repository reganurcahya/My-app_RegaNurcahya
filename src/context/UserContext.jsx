import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = (({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(!isLoggedIn)
  const logout = () => setLoggedIn(!isLoggedIn)

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  )
})

