
import Navbar from '../Components/layout/Navbar'
import AppRouter from './AppRouter'

const App = () => {
  return (
    <>

      <Navbar/>
      <AppRouter/>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developers" element={<Users />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes> */}
    </>
  )
}

export default App
