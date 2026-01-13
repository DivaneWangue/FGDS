import React, { useState } from 'react'
import { MapPin, Camera, Wifi, WifiOff } from 'lucide-react'
import './FieldCollection.scss'

const FieldCollection = () => {
  const [isOnline] = useState(true)
  const [forms] = useState([
    { id: 1, title: 'Suivi activité reboisement', location: 'Zone Littoral', date: '2024-01-10', status: 'synced' },
    { id: 2, title: 'Données bénéficiaires', location: 'Zone Centre', date: '2024-01-09', status: 'pending' },
    { id: 3, title: 'Photos campagne', location: 'Zone Est', date: '2024-01-08', status: 'synced' },
  ])

  return (
    <div className="field-collection-page">
      <div className="page-header">
        <h1>Collecte de données terrain</h1>
        <div className="header-actions">
          <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
            {isOnline ? <Wifi size={18} /> : <WifiOff size={18} />}
            <span>{isOnline ? 'En ligne' : 'Hors ligne'}</span>
          </div>
          <button className="btn btn-primary">
            <Camera size={20} /> Nouveau formulaire
          </button>
        </div>
      </div>

      <div className="card">
        <h2>Données collectées</h2>
        <div className="forms-list">
          {forms.map(form => (
            <div key={form.id} className="form-item">
              <div className="form-icon">📋</div>
              <div className="form-info">
                <h3>{form.title}</h3>
                <p><MapPin size={14} /> {form.location}</p>
                <p className="date">{new Date(form.date).toLocaleDateString('fr-FR')}</p>
              </div>
              <span className={`sync-status ${form.status}`}>
                {form.status === 'synced' ? '✓ Synchronisé' : '⏱ En attente'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="card features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>✓ Formulaires personnalisables</li>
          <li>✓ Géolocalisation GPS</li>
          <li>✓ Capture photo/vidéo</li>
          <li>✓ Mode hors-ligne</li>
          <li>✓ Synchronisation automatique</li>
        </ul>
      </div>
    </div>
  )
}

export default FieldCollection
