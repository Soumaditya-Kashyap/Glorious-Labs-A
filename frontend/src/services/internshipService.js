import API from "../api"

export const createInternshipService = (data) => {
  return API.post("/api/internships/create", data)
}
export const getInternshipsService = () => {
  return API.get("/api/internships/all")
}