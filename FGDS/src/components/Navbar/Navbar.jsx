import React from 'react'
import { Menu, Bell, User, Settings } from 'lucide-react'
import './Navbar.scss'

const Navbar = ({ onMenuToggle, userRole }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <Menu size={24} />
        </button>
        <h1 className="navbar-title">FGDS - FGC Manager</h1>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
          />
        </div>

        <button className="navbar-icon">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <button className="navbar-icon">
          <Settings size={20} />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            <User size={20} />
          </div>
          <span className="user-role">{userRole}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
