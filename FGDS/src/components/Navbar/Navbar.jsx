import React, { useState } from 'react'
import { Menu, Bell, User, Settings, LogOut } from 'lucide-react'
import './Navbar.scss'

const Navbar = ({ onMenuToggle, userRole, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)

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
          <button className="user-button" onClick={() => setShowUserMenu(!showUserMenu)}>
            <div className="user-avatar">
              <User size={20} />
            </div>
            <span className="user-role">{userRole}</span>
          </button>

          {showUserMenu && (
            <div className="user-menu">
              <button onClick={() => {
                setShowUserMenu(false)
              }}>
                <User size={16} /> Mon profil
              </button>
              <button onClick={() => {
                setShowUserMenu(false)
              }}>
                <Settings size={16} /> Paramètres
              </button>
              <div className="menu-divider"></div>
              <button onClick={() => {
                setShowUserMenu(false)
                onLogout && onLogout()
              }} className="logout-btn">
                <LogOut size={16} /> Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
