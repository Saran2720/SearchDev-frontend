import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import SignUp from '../features/auth/pages/SignUp'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
  )
}

export default AppRouter