import React from 'react'
import { useFetchCourseDetailsQuery } from './redux/api/courseApiSlice.js'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default App