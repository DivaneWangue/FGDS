import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Projects from './pages/Projects/Projects'
import Campaigns from './pages/Campaigns/Campaigns'
import FinancialTracking from './pages/FinancialTracking/FinancialTracking'
import AgrModule from './pages/AgrModule/AgrModule'
import FunderAccess from './pages/FunderAccess/FunderAccess'
import FieldCollection from './pages/FieldCollection/FieldCollection'
import UserManagement from './pages/UserManagement/UserManagement'
import Login from './pages/Login/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [userRole, setUserRole] = useState('admin')

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} userRole={userRole} />
        <div className="main-content">
          <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} userRole={userRole} />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard userRole={userRole} />} />
              <Route path="/projects" element={<Projects userRole={userRole} />} />
              <Route path="/campaigns" element={<Campaigns userRole={userRole} />} />
              <Route path="/financial" element={<FinancialTracking userRole={userRole} />} />
              <Route path="/agr" element={<AgrModule userRole={userRole} />} />
              <Route path="/funder" element={<FunderAccess userRole={userRole} />} />
              <Route path="/field-collection" element={<FieldCollection userRole={userRole} />} />
              <Route path="/users" element={<UserManagement userRole={userRole} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
