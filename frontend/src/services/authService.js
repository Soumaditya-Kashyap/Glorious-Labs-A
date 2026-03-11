import API from "../api"

export const registerUser = (data) => {
  return API.post("/api/users/register", data)
}

export const loginUser = (data) => {
  return API.post("/api/users/login", data)
}

export const getCurrentUser = (token) => {
  return API.get("/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}