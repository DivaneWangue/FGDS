import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Lock } from 'lucide-react'
import DataTable from '../../components/DataTable/DataTable'
import Modal from '../../components/Modal/Modal'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import { useToast } from '../../hooks/useToast'
import './UserManagement.scss'

const UserManagement = ({ userRole }) => {
  const { addToast } = useToast()
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'animateur',
    status: 'active'
  })

  const [users, setUsers] = useState([
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

  const roleLabels = {
    admin: 'Administrateur',
    chef: 'Chef de projet',
    animateur: 'Animateur terrain',
    financier: 'Financier/Comptable',
    bailleur: 'Partenaire/Bailleur'
  }

  const handleOpenModal = (user = null) => {
    if (user) {
      setEditingUser(user)
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
      })
    } else {
      setEditingUser(null)
      setFormData({ name: '', email: '', role: 'animateur', status: 'active' })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingUser(null)
  }

  const handleSubmitUser = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.role) {
      addToast('Veuillez remplir tous les champs requis', 'warning')
      return
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      addToast('Veuillez entrer une adresse e-mail valide', 'warning')
      return
    }

    try {
      if (editingUser) {
        const updated = { ...editingUser, ...formData }
        setUsers(users.map(u => u.id === editingUser.id ? updated : u))
        addToast('Utilisateur mis à jour avec succès', 'success')
      } else {
        const newUser = {
          id: Math.max(...users.map(u => u.id), 0) + 1,
          ...formData
        }
        setUsers([...users, newUser])
        addToast('Utilisateur créé avec succès', 'success')
      }
      handleCloseModal()
    } catch {
      addToast('Une erreur est survenue', 'error')
    }
  }

  const handleDeleteClick = (user) => {
    setUserToDelete(user)
    setShowConfirm(true)
  }

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id))
      addToast('Utilisateur supprimé avec succès', 'success')
      setShowConfirm(false)
      setUserToDelete(null)
    }
  }

  const columns = [
    { key: 'name', label: 'Nom' },
    { key: 'email', label: 'Email' },
    {
      key: 'role',
      label: 'Rôle',
      render: (value) => (
        <span className={`role-badge role-${roleColors[value]}`}>
          {roleLabels[value]}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Statut',
      render: (value) => (
        <span className={`status-badge ${value}`}>
          {value === 'active' ? '🟢 Actif' : '🔴 Inactif'}
        </span>
      )
    }
  ]

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>Gestion des utilisateurs</h1>
        {userRole === 'admin' && (
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={20} /> Ajouter un utilisateur
          </button>
        )}
      </div>

      <DataTable
        data={users}
        columns={columns}
        searchable={true}
        sortable={true}
        paginated={true}
        itemsPerPage={10}
        actions={(row) => (
          <div className="actions">
            {userRole === 'admin' && (
              <>
                <button className="action-btn" title="Éditer" onClick={() => handleOpenModal(row)}>
                  <Edit2 size={18} />
                </button>
                <button className="action-btn" title="Permissions">
                  <Lock size={18} />
                </button>
                <button className="action-btn delete" title="Supprimer" onClick={() => handleDeleteClick(row)}>
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </div>
        )}
      />

      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={editingUser ? 'Éditer l\'utilisateur' : 'Ajouter un utilisateur'}
        size="md"
        footer={
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Annuler
            </button>
            <button className="btn btn-primary" onClick={handleSubmitUser}>
              {editingUser ? 'Mettre à jour' : 'Créer'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmitUser}>
          <div className="form-group">
            <label htmlFor="name">Nom complet *</label>
            <input
              id="name"
              type="text"
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="role">Rôle *</label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              >
                <option value="animateur">Animateur terrain</option>
                <option value="chef">Chef de projet</option>
                <option value="financier">Financier/Comptable</option>
                <option value="admin">Administrateur</option>
                <option value="bailleur">Partenaire/Bailleur</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Statut</label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={showConfirm}
        title="Supprimer l'utilisateur"
        message={`Êtes-vous sûr de vouloir supprimer ${userToDelete?.name} ? Cette action ne peut pas être annulée.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
        confirmText="Supprimer"
        isDangerous={true}
      />

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
