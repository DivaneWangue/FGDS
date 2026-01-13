import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Eye, Filter } from 'lucide-react'
import DataTable from '../../components/DataTable/DataTable'
import Modal from '../../components/Modal/Modal'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import { useToast } from '../../hooks/useToast'
import './Projects.scss'

const Projects = ({ userRole }) => {
  const { addToast } = useToast()
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null)
  const [formData, setFormData] = useState({ title: '', funder: '', budget: '', status: 'active', description: '' })

  // Simulated projects data
  const [projects, setProjects] = useState([
    { id: 1, title: 'REPREHREC', status: 'active', funder: 'AFD', budget: 150000, progress: 75, description: 'Projet de réhabilitation écologique' },
    { id: 2, title: 'ABICOM - Agriculture biologique', status: 'active', funder: 'UE', budget: 120000, progress: 60, description: 'Promotion agriculture biologique' },
    { id: 3, title: 'GEVES - Production BioFerNa', status: 'active', funder: 'BAD', budget: 100000, progress: 80, description: 'Production de fertilisants biologiques' },
    { id: 4, title: 'Reboisement communautaire', status: 'completed', funder: 'FGC', budget: 80000, progress: 100, description: 'Projet de reboisement' },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return <span className="badge badge-success">Actif</span>
      case 'completed': return <span className="badge badge-info">Terminé</span>
      default: return <span className="badge badge-warning">Planifié</span>
    }
  }

  const handleOpenModal = (project = null) => {
    if (project) {
      setEditingProject(project)
      setFormData({
        title: project.title,
        funder: project.funder,
        budget: project.budget,
        status: project.status,
        description: project.description || ''
      })
    } else {
      setEditingProject(null)
      setFormData({ title: '', funder: '', budget: '', status: 'active', description: '' })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingProject(null)
    setFormData({ title: '', funder: '', budget: '', status: 'active', description: '' })
  }

  const handleSubmitProject = async (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.funder || !formData.budget) {
      addToast('Veuillez remplir tous les champs requis', 'warning')
      return
    }

    try {
      if (editingProject) {
        const updated = { ...editingProject, ...formData }
        setProjects(projects.map(p => p.id === editingProject.id ? updated : p))
        addToast('Projet mis à jour avec succès', 'success')
      } else {
        const newProject = {
          id: Math.max(...projects.map(p => p.id), 0) + 1,
          ...formData,
          progress: 0,
          budget: parseInt(formData.budget)
        }
        setProjects([...projects, newProject])
        addToast('Projet créé avec succès', 'success')
      }
      handleCloseModal()
    } catch {
      addToast('Une erreur est survenue', 'error')
    }
  }

  const handleDeleteClick = (project) => {
    setProjectToDelete(project)
    setShowConfirm(true)
  }

  const handleConfirmDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter(p => p.id !== projectToDelete.id))
      addToast('Projet supprimé avec succès', 'success')
      setShowConfirm(false)
      setProjectToDelete(null)
    }
  }

  const columns = [
    { key: 'title', label: 'Titre du projet' },
    { key: 'funder', label: 'Bailleur' },
    { 
      key: 'budget',
      label: 'Budget',
      render: (value) => `${parseInt(value).toLocaleString()} €`
    },
    {
      key: 'progress',
      label: 'Progression',
      render: (value) => (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${value}%` }}></div>
          <span>{value}%</span>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Statut',
      render: (value) => getStatusBadge(value)
    }
  ]

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Gestion des projets</h1>
        {userRole !== 'bailleur' && (
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={20} /> Nouveau projet
          </button>
        )}
      </div>

      <DataTable
        data={projects}
        columns={columns}
        searchable={true}
        sortable={true}
        paginated={true}
        itemsPerPage={10}
        actions={(row) => (
          <div className="actions">
            <button className="action-btn" title="Voir" onClick={() => handleOpenModal(row)}>
              <Eye size={18} />
            </button>
            {userRole !== 'bailleur' && (
              <>
                <button className="action-btn" title="Éditer" onClick={() => handleOpenModal(row)}>
                  <Edit2 size={18} />
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
        title={editingProject ? 'Éditer le projet' : 'Créer un nouveau projet'}
        size="lg"
        footer={
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Annuler
            </button>
            <button className="btn btn-primary" onClick={handleSubmitProject}>
              {editingProject ? 'Mettre à jour' : 'Créer'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmitProject}>
          <div className="form-group">
            <label htmlFor="title">Titre *</label>
            <input
              id="title"
              type="text"
              placeholder="Titre du projet"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="funder">Bailleur *</label>
              <select
                id="funder"
                value={formData.funder}
                onChange={(e) => setFormData({ ...formData, funder: e.target.value })}
                required
              >
                <option value="">Sélectionner un bailleur</option>
                <option value="AFD">AFD</option>
                <option value="UE">UE</option>
                <option value="BAD">BAD</option>
                <option value="FGC">FGC</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget *</label>
              <input
                id="budget"
                type="number"
                placeholder="0"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Statut</label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="active">Actif</option>
                <option value="planned">Planifié</option>
                <option value="completed">Terminé</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Description du projet"
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={showConfirm}
        title="Supprimer le projet"
        message={`Êtes-vous sûr de vouloir supprimer le projet "${projectToDelete?.title}" ? Cette action ne peut pas être annulée.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
        confirmText="Supprimer"
        isDangerous={true}
      />
    </div>
  )
}

export default Projects
