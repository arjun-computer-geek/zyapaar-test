import { configureStore } from '@reduxjs/toolkit'
import EmployeeReducer from './EmployeeSlice'


export const store = configureStore({
  reducer: {
    employee: EmployeeReducer
  },
})