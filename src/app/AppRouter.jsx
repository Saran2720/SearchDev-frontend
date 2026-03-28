import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import SignUp from '../features/auth/pages/SignUp'
import Developers from '../features/auth/pages/Developers'
import Porjects from '../features/auth/pages/Porjects'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/developer' element={<Developers/>} />
        <Route path='/projects' element={<Porjects/>}/>
    </Routes>
  )
}

export default AppRouter