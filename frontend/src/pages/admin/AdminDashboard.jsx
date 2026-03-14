import React from 'react'
import StudentList from '../../components/adminComponents/StudentList'
import { CreateInternShip } from '../../components/adminComponents/CreateInternShip'

export const AdminDashboard = () => {
  return (
    <div>
      
      <CreateInternShip />
      
      <StudentList/>

      
    </div>
  )
}
