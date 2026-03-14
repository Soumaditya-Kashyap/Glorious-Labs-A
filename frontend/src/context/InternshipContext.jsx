import { createContext } from "react"
import { createInternshipService,getInternshipsService } from "../services/internshipService"

export const InternshipContext = createContext()

export const InternshipProvider = ({ children }) => {

  const createInternship = async (data) => {

    const res = await createInternshipService(data)

    return res.data
  }

  const getInternships = async () => {

    const res = await getInternshipsService()

    return res.data
  }

  return (
    <InternshipContext.Provider value={{ createInternship, getInternships }}>
      {children}
    </InternshipContext.Provider>
  )
}