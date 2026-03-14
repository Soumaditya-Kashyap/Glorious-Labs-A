import { useContext, useState } from "react"
import { InternshipContext } from "../context/InternshipContext"

export const useInternship = () => {

  const { createInternship, getInternships: getInternshipsFromContext } = useContext(InternshipContext)

  const [loading, setLoading] = useState(false)

  const create = async (data) => {

    try {

      setLoading(true)

      const res = await createInternship(data)

      setLoading(false)

      return res

    } catch (error) {

      setLoading(false)

      throw error
    }
  }

  const getInternships = async () => {

    try {

      setLoading(true)

      const res = await getInternshipsFromContext()

      setLoading(false)

      return res

    } catch (error) {

      setLoading(false)

      throw error
    }
  }

  return { create, getInternships, loading }
}