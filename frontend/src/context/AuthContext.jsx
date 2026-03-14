import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const login = (data) => {
    localStorage.setItem("token", data.token)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const me = (data) => {
    setUser(data)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, me }}>
      {children}
    </AuthContext.Provider>
  )
}