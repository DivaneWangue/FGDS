import React from 'react'
import './FunderAccess.scss'

const FunderAccess = () => {
  const fundedProjects = [
    { id: 1, name: 'REPREHREC', budget: 150000, spent: 112500, progress: 75, startDate: '2023-01-15' },
    { id: 2, name: 'ABICOM', budget: 120000, spent: 72000, progress: 60, startDate: '2023-06-01' },
  ]

  return (
    <div className="funder-page">
      <div className="page-header">
        <h1>Espace Bailleurs</h1>
        <p>Suivi des projets financés</p>
      </div>

      <div className="funder-summary">
        <div className="summary-card">
          <h3>Montant investi</h3>
          <p>270,000 €</p>
        </div>
        <div className="summary-card">
          <h3>Montant dépensé</h3>
          <p>184,500 €</p>
        </div>
        <div className="summary-card">
          <h3>Taux moyen d'exécution</h3>
          <p>67.5%</p>
        </div>
      </div>

      <div className="card">
        <h2>Vos projets financés</h2>
        <div className="projects-list">
          {fundedProjects.map(project => (
            <div key={project.id} className="funder-project">
              <div className="project-name">
                <h3>{project.name}</h3>
                <p>Démarrage: {new Date(project.startDate).toLocaleDateString('fr-FR')}</p>
              </div>
              <div className="project-details">
                <div className="detail">
                  <span className="label">Budget</span>
                  <span className="value">{project.budget.toLocaleString()} €</span>
                </div>
                <div className="detail">
                  <span className="label">Dépensé</span>
                  <span className="value">{project.spent.toLocaleString()} €</span>
                </div>
                <div className="detail">
                  <span className="label">Progression</span>
                  <div className="progress-bar-full">
                    <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                    <span className="progress-text">{project.progress}%</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-secondary btn-small">Voir le rapport</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FunderAccess
