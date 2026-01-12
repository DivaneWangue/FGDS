import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Lock } from 'lucide-react'
import './UserManagement.scss'

const UserManagement = ({ userRole }) => {
  const [users] = useState([
    { id: 1, name: 'Ahmed Diallo', email: 'ahmed@fgc.org', role: 'admin', status: 'active' },
    { id: 2, name: 'Marie Sow', email: 'marie@fgc.org', role: 'chef', status: 'active' },
    { id: 3, name: 'Jean Dubois', email: 'jean@fgc.org', role: 'financier', status: 'active' },
    { id: 4, name: 'Fatou Ndiaye', email: 'fatou@fgc.org', role: 'animateur', status: 'active' },
  ])

  const roleColors = {
    admin: 'primary',
    chef: 'blue',
    animateur: 'green',
    financier: 'orange',
    bailleur: 'purple'
  }

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>Gestion des utilisateurs</h1>
        {userRole === 'admin' && (
          <button className="btn btn-primary">
            <Plus size={20} /> Ajouter un utilisateur
          </button>
        )}
      </div>

      <div className="card">
        <h2>Liste des utilisateurs</h2>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Rôle</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td><strong>{user.name}</strong></td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge role-${roleColors[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge active">
                      {user.status === 'active' ? '🟢 Actif' : '🔴 Inactif'}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="action-btn" title="Éditer">
                      <Edit2 size={18} />
                    </button>
                    <button className="action-btn" title="Permissions">
                      <Lock size={18} />
                    </button>
                    <button className="action-btn delete" title="Supprimer">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card roles-info">
        <h2>Description des rôles</h2>
        <div className="roles-grid">
          <div className="role-card">
            <h3>Administrateur</h3>
            <p>Accès complet à tous les modules et paramètres du système</p>
          </div>
          <div className="role-card">
            <h3>Chef de projet</h3>
            <p>Gestion des projets, activités et suivi des équipes</p>
          </div>
          <div className="role-card">
            <h3>Animateur terrain</h3>
            <p>Collecte de données, suivi des bénéficiaires et activités</p>
          </div>
          <div className="role-card">
            <h3>Financier/Comptable</h3>
            <p>Gestion des budgets, dépenses et rapports financiers</p>
          </div>
          <div className="role-card">
            <h3>Partenaire/Bailleur</h3>
            <p>Visualisation des projets financés et rapports validés</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
