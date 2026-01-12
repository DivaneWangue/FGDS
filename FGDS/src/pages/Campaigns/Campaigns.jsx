import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Users } from 'lucide-react'
import './Campaigns.scss'

const Campaigns = ({ userRole }) => {
  const [campaigns] = useState([
    { id: 1, title: 'Sensibilisation environnementale', region: 'Littoral', participants: 450, status: 'active' },
    { id: 2, title: 'Formation agriculture biologique', region: 'Centre', participants: 320, status: 'active' },
    { id: 3, title: 'Reboisement communautaire', region: 'Est', participants: 280, status: 'completed' },
  ])

  return (
    <div className="campaigns-page">
      <div className="page-header">
        <h1>Gestion des campagnes</h1>
        {userRole !== 'bailleur' && (
          <button className="btn btn-primary">
            <Plus size={20} /> Nouvelle campagne
          </button>
        )}
      </div>

      <div className="campaigns-grid">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="campaign-card">
            <div className="campaign-header">
              <h3>{campaign.title}</h3>
              <span className={`campaign-status ${campaign.status}`}>
                {campaign.status === 'active' ? 'Actif' : 'Terminé'}
              </span>
            </div>
            <div className="campaign-body">
              <p><strong>Région:</strong> {campaign.region}</p>
              <p><Users size={16} /> {campaign.participants} participants</p>
            </div>
            {userRole !== 'bailleur' && (
              <div className="campaign-actions">
                <button className="btn btn-small btn-secondary">Éditer</button>
                <button className="btn btn-small btn-danger">Supprimer</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campaigns
