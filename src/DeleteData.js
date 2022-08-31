import React, { useState } from 'react'
import { useDispatch} from 'react-redux/es/exports'
import { deleteEmployee } from './EmployeeSlice'

export const DeleteData = () => {
    const [employeeId, setEmployeeId] = useState("")
    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteEmployee(employeeId))
    }
  return (
    <div>
        <h1> Delete Page</h1>
        <input 
        placeholder='id to be deleted' 
        name="id"
        onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}
