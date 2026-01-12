import React from 'react'
import './AgrModule.scss'

const AgrModule = ({ userRole }) => {
  const agrProjects = [
    { id: 1, name: 'BioFerNa Production Zone 1', location: 'Littoral', production: 5000, revenue: 125000 },
    { id: 2, name: 'BioFerNa Production Zone 2', location: 'Centre', production: 3500, revenue: 87500 },
    { id: 3, name: 'Culture Agriculture Bio', location: 'Ouest', production: 2800, revenue: 56000 },
  ]

  return (
    <div className="agr-page">
      <div className="page-header">
        <h1>Module BioFerNa - AGR</h1>
        <p>Gestion des Activités Génératrices de Revenus</p>
      </div>

      <div className="agr-stats">
        <div className="stat">
          <h3>Production totale</h3>
          <p>11,300 kg</p>
        </div>
        <div className="stat">
          <h3>Revenus générés</h3>
          <p>268,500 €</p>
        </div>
        <div className="stat">
          <h3>Zones actives</h3>
          <p>3</p>
        </div>
        <div className="stat">
          <h3>Emplois créés</h3>
          <p>45</p>
        </div>
      </div>

      <div className="card">
        <h2>Projets AGR actifs</h2>
        <div className="agr-list">
          {agrProjects.map(project => (
            <div key={project.id} className="agr-item">
              <div className="agr-icon">🌱</div>
              <div className="agr-info">
                <h3>{project.name}</h3>
                <p><strong>Localisation:</strong> {project.location}</p>
                <p><strong>Production:</strong> {project.production} kg</p>
              </div>
              <div className="agr-revenue">
                <p className="revenue-amount">{project.revenue.toLocaleString()} €</p>
                <p className="revenue-label">Revenus</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AgrModule
