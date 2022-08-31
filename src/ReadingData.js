import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getAllEmployees } from './EmployeeSlice'

export const ReadingData = () => {
    const { employees } = useSelector(state => state.employee)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEmployees())
    }, [])

    console.log(employees)
    return (
        <div>
            <h1>Epmloyees</h1>
            {employees?.map(employee => {
                return <ul>
                    <li> {employee.id}</li>
                    <li> {employee.employee_name}</li>
                    <li> {employee.employee_age}</li>
                </ul>
            })}
        </div>
    )
}
