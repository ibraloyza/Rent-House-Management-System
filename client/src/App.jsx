import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Houses from './pages/Houses'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import About from './pages/About '

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<About />}/>
        <Route path='/about' element={<About />}/>

        <Route path='/signup' element={<Signup />} />
        <Route  path='/login' element={<Login />}/>
            <Route path='/dashboard' element={         
              <ProtectedRoute>
               <Dashboard />
             </ProtectedRoute>} />
        
      </Routes>
    </Router>
  )
}

export default App