import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Eye, Filter } from 'lucide-react'
import './Projects.scss'

const Projects = ({ userRole }) => {
  const [showModal, setShowModal] = useState(false)
  const [projects, setProjects] = useState([
    { id: 1, title: 'REPREHREC', status: 'active', funder: 'AFD', budget: 150000, progress: 75 },
    { id: 2, title: 'ABICOM - Agriculture biologique', status: 'active', funder: 'UE', budget: 120000, progress: 60 },
    { id: 3, title: 'GEVES - Production BioFerNa', status: 'active', funder: 'BAD', budget: 100000, progress: 80 },
    { id: 4, title: 'Reboisement communautaire', status: 'completed', funder: 'FGC', budget: 80000, progress: 100 },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active': return <span className="badge badge-success">Actif</span>
      case 'completed': return <span className="badge badge-info">Terminé</span>
      default: return <span className="badge badge-warning">Planifié</span>
    }
  }

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Gestion des projets</h1>
        {userRole !== 'bailleur' && (
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            <Plus size={20} /> Nouveau projet
          </button>
        )}
      </div>

      <div className="filter-bar">
        <button className="filter-btn">
          <Filter size={18} /> Filtrer
        </button>
      </div>

      <div className="projects-table">
        <table>
          <thead>
            <tr>
              <th>Titre du projet</th>
              <th>Bailleur</th>
              <th>Budget</th>
              <th>Progression</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td><strong>{project.title}</strong></td>
                <td>{project.funder}</td>
                <td>{project.budget.toLocaleString()} €</td>
                <td>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${project.progress}%` }}></div>
                    <span>{project.progress}%</span>
                  </div>
                </td>
                <td>{getStatusBadge(project.status)}</td>
                <td className="actions">
                  <button className="action-btn" title="Voir">
                    <Eye size={18} />
                  </button>
                  {userRole !== 'bailleur' && (
                    <>
                      <button className="action-btn" title="Éditer">
                        <Edit2 size={18} />
                      </button>
                      <button className="action-btn delete" title="Supprimer">
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Créer un nouveau projet</h2>
            <form>
              <div className="form-group">
                <label>Titre</label>
                <input type="text" placeholder="Titre du projet" />
              </div>
              <div className="form-group">
                <label>Bailleur</label>
                <select>
                  <option>AFD</option>
                  <option>UE</option>
                  <option>BAD</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
