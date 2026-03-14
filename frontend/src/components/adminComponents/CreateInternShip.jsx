import React, { useState } from "react"
import { useInternship } from "../../hooks/useInternship"

export const CreateInternShip = () => {

  const { create, loading } = useInternship()

  const [formData, setFormData] = useState({
    domain_name: "",
    description: "",
    price: "",
    duration: "",
    seats: "",
    level: "",
    mentorshipCost: "",
    documentationCost: "",
    hrSupport: "",
    studyMaterial: "",
    jobPreference_cost: "",
    skills: "",
    perks: ""
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    const data = {
      ...formData,
      price: Number(formData.price),
      seats: Number(formData.seats),
      mentorshipCost: Number(formData.mentorshipCost),
      documentationCost: Number(formData.documentationCost),
      hrSupport: Number(formData.hrSupport),
      studyMaterial: Number(formData.studyMaterial),
      jobPreference_cost: Number(formData.jobPreference_cost),
      skills: formData.skills.split(",").map(s => s.trim()),
      perks: formData.perks.split(",").map(p => p.trim())
    }

    try {

      await create(data)

      alert("Internship created successfully")

      setFormData({
        domain_name: "",
        description: "",
        price: "",
        duration: "",
        seats: "",
        level: "",
        mentorshipCost: "",
        documentationCost: "",
        hrSupport: "",
        studyMaterial: "",
        jobPreference_cost: "",
        skills: "",
        perks: ""
      })

    } catch (err) {

      console.error(err)
      alert("Error creating internship")

    }

  }

  return (

    <div className="p-6">

      <h2 className="text-xl font-bold mb-4">Create Internship</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          name="domain_name"
          placeholder="Domain Name"
          value={formData.domain_name}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />

        <input
          name="seats"
          placeholder="Seats"
          value={formData.seats}
          onChange={handleChange}
        />

        <input
          name="level"
          placeholder="Level"
          value={formData.level}
          onChange={handleChange}
        />

        <input
          name="mentorshipCost"
          placeholder="Mentorship Cost"
          value={formData.mentorshipCost}
          onChange={handleChange}
        />

        <input
          name="documentationCost"
          placeholder="Documentation Cost"
          value={formData.documentationCost}
          onChange={handleChange}
        />

        <input
          name="hrSupport"
          placeholder="HR Support"
          value={formData.hrSupport}
          onChange={handleChange}
        />

        <input
          name="studyMaterial"
          placeholder="Study Material"
          value={formData.studyMaterial}
          onChange={handleChange}
        />

        <input
          name="jobPreference_cost"
          placeholder="Job Preference Cost"
          value={formData.jobPreference_cost}
          onChange={handleChange}
        />

        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        />

        <input
          name="perks"
          placeholder="Perks (comma separated)"
          value={formData.perks}
          onChange={handleChange}
        />

        <button type="submit">
          {loading ? "Creating..." : "Create Internship"}
        </button>

      </form>

    </div>

  )
}