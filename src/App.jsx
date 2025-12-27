import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import Navbar from './Components/Navbar'
import Projects from './pages/Projects'
import Inbox from './pages/Inbox'

const App = () => {
  return (
    <>

      <Navbar />
      {/* <NavSample/> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developers" element={<Users />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </>
  )
}

export default App
