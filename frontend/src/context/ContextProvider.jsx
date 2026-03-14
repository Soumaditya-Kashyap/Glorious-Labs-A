import { createContext, useState } from "react"
import { InternshipProvider } from "./InternshipContext"

export const AuthContext = createContext()

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const login = (data) => {
    localStorage.setItem("token", data.token)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (

    <AuthContext.Provider value={{ user, login, logout }}>

      <InternshipProvider>

        {children}

      </InternshipProvider>

    </AuthContext.Provider>

  )
}