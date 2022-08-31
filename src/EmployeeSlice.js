import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllEmployees = createAsyncThunk("employee/getAllEmployees", async()=> {
    const {data} = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    return data
})
export const getSingleEmployee = createAsyncThunk("employee/getSingleEmployee", async(id) => {
    const res = await axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
    return res.data;
})
export const createEmployee = createAsyncThunk("employee/getAllEmployees", async(employeeDetails)=> {
    const {data} = await axios.post('https://dummy.restapiexample.com/api/v1/create', {
    employeeDetails
    });
    return data
})
export const updateEmployee = createAsyncThunk("employee/getAllEmployees", async(employeeDetails)=> {
    const {id, updatedInfo} = employeeDetails
    const {data} = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${id}`);
    return data
})
export const deleteEmployee = createAsyncThunk("employee/getAllEmployees", async(id)=> {
    const {data} = await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
    return data
})

export const EmployeeSlice = createSlice({
    name: "employee",
    initialState: {
        employees: [],
        currentEmployee: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllEmployees.pending] : (state, action) => {
            state.employees = null;
            state.loading = true
        } ,
        [getAllEmployees.fullfild] : (state, action) => {
            state.employees = action.payload;
            state.loading = false
        } ,
        [getAllEmployees.rejected] : (state, action) => {
            state.employees = null;
            state.loading = true;
            state.error = action.error;
        },
        [getSingleEmployee.pending] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true
        } ,
        [getSingleEmployee.fullfild] : (state, action) => {
            state.currentEmployee = action.payload;
            state.loading = false
        } ,
        [getSingleEmployee.rejected] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true;
            state.error = action.error;
        },
        [createEmployee.pending] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true
        } ,     
        [createEmployee.fullfild] : (state, action) => {
            state.currentEmployee = action.payload;
            state.loading = false
        } ,     
        [createEmployee.rejected] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true;
            state.error = action.error
        } ,
        [updateEmployee.pending] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true
        } ,     
        [updateEmployee.fullfild] : (state, action) => {
            state.currentEmployee = action.payload;
            state.loading = false
        } ,     
        [updateEmployee.rejected] : (state, action) => {
            state.currentEmployee = null;
            state.loading = true;
            state.error = action.error;
        } ,  
        
        [deleteEmployee.pending] : (state, action) => {
            state.loading = true
        } ,     
        [updateEmployee.fullfild] : (state, action) => {
            state.loading = false
        } ,     
        [updateEmployee.rejected] : (state, action) => {
            state.loading = true;
            state.error = action.error;
        } ,        
    }
})

export default EmployeeSlice.reducer