import React, { useState } from 'react'
import { Plus, Edit2, Trash2, Users } from 'lucide-react'
import DataTable from '../../components/DataTable/DataTable'
import Modal from '../../components/Modal/Modal'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import { useToast } from '../../hooks/useToast'
import './Campaigns.scss'

const Campaigns = ({ userRole }) => {
  const { addToast } = useToast()
  const [showModal, setShowModal] = useState(false)
  const [editingCampaign, setEditingCampaign] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [campaignToDelete, setCampaignToDelete] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    region: '',
    startDate: '',
    endDate: '',
    target: '',
    description: ''
  })

  const [campaigns, setCampaigns] = useState([
    { id: 1, title: 'Sensibilisation environnementale', region: 'Littoral', participants: 450, status: 'active', startDate: '2024-01-15', target: 500 },
    { id: 2, title: 'Formation agriculture biologique', region: 'Centre', participants: 320, status: 'active', startDate: '2024-02-01', target: 400 },
    { id: 3, title: 'Reboisement communautaire', region: 'Est', participants: 280, status: 'completed', startDate: '2023-11-01', target: 300 },
  ])

  const handleOpenModal = (campaign = null) => {
    if (campaign) {
      setEditingCampaign(campaign)
      setFormData({
        title: campaign.title,
        region: campaign.region,
        startDate: campaign.startDate,
        endDate: campaign.endDate || '',
        target: campaign.target,
        description: campaign.description || ''
      })
    } else {
      setEditingCampaign(null)
      setFormData({ title: '', region: '', startDate: '', endDate: '', target: '', description: '' })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingCampaign(null)
  }

  const handleSubmitCampaign = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.region || !formData.startDate || !formData.target) {
      addToast('Veuillez remplir tous les champs requis', 'warning')
      return
    }

    try {
      if (editingCampaign) {
        const updated = { ...editingCampaign, ...formData, target: parseInt(formData.target) }
        setCampaigns(campaigns.map(c => c.id === editingCampaign.id ? updated : c))
        addToast('Campagne mise à jour avec succès', 'success')
      } else {
        const newCampaign = {
          id: Math.max(...campaigns.map(c => c.id), 0) + 1,
          ...formData,
          participants: 0,
          target: parseInt(formData.target),
          status: 'active'
        }
        setCampaigns([...campaigns, newCampaign])
        addToast('Campagne créée avec succès', 'success')
      }
      handleCloseModal()
    } catch {
      addToast('Une erreur est survenue', 'error')
    }
  }

  const handleDeleteClick = (campaign) => {
    setCampaignToDelete(campaign)
    setShowConfirm(true)
  }

  const handleConfirmDelete = () => {
    if (campaignToDelete) {
      setCampaigns(campaigns.filter(c => c.id !== campaignToDelete.id))
      addToast('Campagne supprimée avec succès', 'success')
      setShowConfirm(false)
      setCampaignToDelete(null)
    }
  }

  const columns = [
    { key: 'title', label: 'Titre de la campagne' },
    { key: 'region', label: 'Région' },
    { key: 'startDate', label: 'Date de début' },
    {
      key: 'participants',
      label: 'Participants',
      render: (value, row) => `${value} / ${row.target || 0}`
    },
    {
      key: 'status',
      label: 'Statut',
      render: (value) => (
        <span className={`badge ${value === 'active' ? 'badge-success' : 'badge-info'}`}>
          {value === 'active' ? 'Actif' : 'Terminé'}
        </span>
      )
    }
  ]

  return (
    <div className="campaigns-page">
      <div className="page-header">
        <h1>Gestion des campagnes</h1>
        {userRole !== 'bailleur' && (
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            <Plus size={20} /> Nouvelle campagne
          </button>
        )}
      </div>

      <DataTable
        data={campaigns}
        columns={columns}
        searchable={true}
        sortable={true}
        paginated={true}
        itemsPerPage={10}
        actions={(row) => (
          <div className="actions">
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
        title={editingCampaign ? 'Éditer la campagne' : 'Créer une nouvelle campagne'}
        size="lg"
        footer={
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Annuler
            </button>
            <button className="btn btn-primary" onClick={handleSubmitCampaign}>
              {editingCampaign ? 'Mettre à jour' : 'Créer'}
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmitCampaign}>
          <div className="form-group">
            <label htmlFor="title">Titre de la campagne *</label>
            <input
              id="title"
              type="text"
              placeholder="Titre de la campagne"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="region">Région *</label>
              <select
                id="region"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                required
              >
                <option value="">Sélectionner une région</option>
                <option value="Littoral">Littoral</option>
                <option value="Centre">Centre</option>
                <option value="Est">Est</option>
                <option value="Ouest">Ouest</option>
                <option value="Nord">Nord</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="target">Cible de participants *</label>
              <input
                id="target"
                type="number"
                placeholder="0"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="startDate">Date de début *</label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">Date de fin</label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Description de la campagne"
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={showConfirm}
        title="Supprimer la campagne"
        message={`Êtes-vous sûr de vouloir supprimer la campagne "${campaignToDelete?.title}" ? Cette action ne peut pas être annulée.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
        confirmText="Supprimer"
        isDangerous={true}
      />
    </div>
  )
}

export default Campaigns
