import React from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Folder,
  Megaphone,
  DollarSign,
  Leaf,
  Users,
  MapPin,
  UserCog,
  LogOut,
  ChevronDown
} from 'lucide-react'
import './Sidebar.scss'

const Sidebar = ({ isOpen, userRole }) => {
  const [expandedMenu, setExpandedMenu] = React.useState(null)

  const menuItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/', role: ['admin', 'chef', 'animateur', 'financier', 'bailleur'] },
    { icon: Folder, label: 'Gestion des projets', path: '/projects', role: ['admin', 'chef', 'animateur'] },
    { icon: Megaphone, label: 'Campagnes', path: '/campaigns', role: ['admin', 'chef', 'animateur'] },
    { icon: DollarSign, label: 'Suivi financier', path: '/financial', role: ['admin', 'financier'] },
    { icon: Leaf, label: 'BioFerNa - AGR', path: '/agr', role: ['admin', 'chef', 'animateur'] },
    { icon: MapPin, label: 'Collecte terrain', path: '/field-collection', role: ['admin', 'animateur'] },
    { icon: Users, label: 'Accès bailleur', path: '/funder', role: ['admin', 'bailleur'] },
    { icon: UserCog, label: 'Gestion utilisateurs', path: '/users', role: ['admin'] },
  ]

  const filteredMenuItems = menuItems.filter(item => item.role.includes(userRole))

  const toggleMenu = (label) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Leaf size={28} />
          <span className={`logo-text ${!isOpen ? 'hidden' : ''}`}>FGDS</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {filteredMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="menu-item"
            title={!isOpen ? item.label : ''}
          >
            <item.icon size={20} />
            <span className={`menu-label ${!isOpen ? 'hidden' : ''}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="menu-item logout">
          <LogOut size={20} />
          <span className={`menu-label ${!isOpen ? 'hidden' : ''}`}>
            Déconnexion
          </span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
