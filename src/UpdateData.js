import React, { useState } from 'react'
import { createEmployee, getSingleEmployee, updateEmployee } from './EmployeeSlice'
import { useDispatch, useSelector } from 'react-redux/es/exports'

export const UpdatePage = () => {
    const [id, setId] = useState({})
    const [currentEmployeeData, setCurrentEmployreeData] = useState({})
    const { currentEmployee } = useSelector(state => state.employee)
    const dispatch = useDispatch()

    const createHandler = () => {
        dispatch(updateEmployee({ id, currentEmployeeData }))
    }
    const searchHandler = () => {
        dispatch(getSingleEmployee(id))
    }
    return (
        <div>
            <h1>Updateing...</h1>
            {currentEmployee ? <>
                <input
                    name="employee_name"
                    value={currentEmployee.employee_name}
                    placeholder="name"
                    onChange={(e) => setId(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <input
                    name='employee_salary'
                    placeholder="salary"
                    value={currentEmployee.employee_salary}
                    onChange={(e) => setCurrentEmployreeData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <input
                    name='employee_age'
                    placeholder="Age"
                    value={currentEmployee.employee_age}
                    onChange={(e) => setCurrentEmployreeData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <button onClick={createHandler}>Submit</button>

            </> : <>
                <input placeholder='plese Provie id' onChange={(e) => setId(e.target.value)} />
                <button onClick={searchHandler}>Search</button>
            </>
            }

        </div>
    )
}
