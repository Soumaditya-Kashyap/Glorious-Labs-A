import { useState } from "react"
import { loginUser, registerUser } from "../services/authService"

export const useAuth = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {

    try {

      setLoading(true)
      setError(null)

      const res = await loginUser({ email, password })

      localStorage.setItem("token", res.data.token)

      return res.data

    } catch (err) {

      setError(err.response?.data?.message || "Login failed")

    } finally {

      setLoading(false)

    }

  }

  const register = async (name, email, password) => {

    try {

      setLoading(true)
      setError(null)

      const res = await registerUser({ name, email, password })

      return res.data

    } catch (err) {

      setError(err.response?.data?.message || "Register failed")

    } finally {

      setLoading(false)

    }

  }

  const me= async (token) => {

    try {

      setLoading(true)
      setError(null)

      const res = await getCurrentUser(token)

      return res.data

    } catch (err) {

      setError(err.response?.data?.message || "Fetch user failed")

    } finally {

      setLoading(false)

    }

  }

  return {
    login,
    register,
    me,
    loading,
    error
  }

}