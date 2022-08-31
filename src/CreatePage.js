import React, { useState } from 'react'
import { createEmployee } from './EmployeeSlice'
import { useDispatch } from 'react-redux/es/exports'

export const CreatePage = () => {
    const [currentEmployeeData, setCurrentEmployreeData] = useState({})
    const dispatch = useDispatch()
    const createHandler = () => {
        dispatch(createEmployee(currentEmployeeData))
    }
    return (
        <div>
            <h1>Create</h1>
            <input
                name="employee_name"
                placeholder="name"
                onChange={(e) => setCurrentEmployreeData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
            />
            <input
                name='employee_salary'
                placeholder="salary"
                onChange={(e) => setCurrentEmployreeData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
            />
            <input
                name='employee_age'
                placeholder="Age"
                onChange={(e) => setCurrentEmployreeData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
            />
            <button onClick={createHandler}>Submit</button>
        </div>
    )
}
