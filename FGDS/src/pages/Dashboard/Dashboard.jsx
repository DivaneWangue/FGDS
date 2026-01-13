import React from 'react'
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import {
  Folder, Megaphone, TrendingUp, Users, Zap, DollarSign, Download, FileText
} from 'lucide-react'
import './Dashboard.scss'

const StatCard = ({ icon, title, value, change, color }) => {
  const Icon = icon
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <Icon size={28} />
      </div>
    <div className="stat-content">
      <p className="stat-label">{title}</p>
      <h3 className="stat-value">{value}</h3>
      <span className={`stat-change ${change >= 0 ? 'positive' : 'negative'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
  </div>
  )
}

const Dashboard = () => {
  // Données simulées
  const projectStats = {
    total: 12,
    active: 8,
    completed: 4,
    budget: 450000
  }

  const campaignData = [
    { month: 'Jan', participants: 400, completed: 240 },
    { month: 'Fév', participants: 500, completed: 320 },
    { month: 'Mar', participants: 450, completed: 280 },
    { month: 'Avr', participants: 600, completed: 420 },
    { month: 'Mai', participants: 700, completed: 500 },
    { month: 'Juin', participants: 800, completed: 600 },
  ]

  const projectStatus = [
    { name: 'Actifs', value: 8 },
    { name: 'Planifiés', value: 2 },
    { name: 'Terminés', value: 4 }
  ]

  const beneficiaryData = [
    { category: 'Femmes', value: 450 },
    { category: 'Jeunes', value: 380 },
    { category: 'Enfants', value: 520 },
    { category: 'Autres', value: 280 }
  ]

  // Données bailleurs
  const bailleurs = [
    { id: 1, name: 'AFD', totalInvested: 150000, spent: 112500, projects: 5, execution: 75 },
    { id: 2, name: 'UE', totalInvested: 120000, spent: 72000, projects: 4, execution: 60 },
    { id: 3, name: 'Banque Mondiale', totalInvested: 100000, spent: 85000, projects: 2, execution: 85 },
    { id: 4, name: 'FIDA', totalInvested: 80000, spent: 48000, projects: 3, execution: 60 },
  ]

  const projectsByFunder = [
    { name: 'REPREHREC', funder: 'AFD', budget: 50000, spent: 37500, execution: 75 },
    { name: 'ABICOM', funder: 'UE', budget: 60000, spent: 36000, execution: 60 },
    { name: 'BioFerNa', funder: 'AFD', budget: 40000, spent: 32000, execution: 80 },
    { name: 'Production Durables', funder: 'Banque Mondiale', budget: 80000, spent: 68000, execution: 85 },
    { name: 'Formation Jeunes', funder: 'FIDA', budget: 30000, spent: 18000, execution: 60 },
  ]

  const COLORS = ['#2ecc71', '#3498db', '#f39c12', '#e74c3c']

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Tableau de bord</h1>
        <p>Bienvenue sur le système de gestion FGDS</p>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-4">
        <StatCard
          icon={Folder}
          title="Projets"
          value={projectStats.total}
          change={15}
          color="blue"
        />
        <StatCard
          icon={Megaphone}
          title="Campagnes"
          value={24}
          change={8}
          color="green"
        />
        <StatCard
          icon={Users}
          title="Bénéficiaires"
          value={1630}
          change={22}
          color="orange"
        />
        <StatCard
          icon={DollarSign}
          title="Budget total"
          value="450K €"
          change={12}
          color="purple"
        />
      </div>

      {/* Graphiques */}
      <div className="dashboard-charts">
        <div className="chart-container">
          <h2>Évolution des participations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="participants" stroke="#2ecc71" name="Participants" />
              <Line type="monotone" dataKey="completed" stroke="#3498db" name="Complétés" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Statut des projets</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {projectStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h2>Bénéficiaires par catégorie</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={beneficiaryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2ecc71" name="Nombre" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Activités récentes</h2>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-icon">📊</div>
              <div className="activity-details">
                <p className="activity-title">Rapport financier REPREHREC</p>
                <p className="activity-date">Il y a 2 heures</p>
              </div>
              <span className="activity-status">Validé</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon">👥</div>
              <div className="activity-details">
                <p className="activity-title">Nouvelle campagne ABICOM lancée</p>
                <p className="activity-date">Il y a 5 heures</p>
              </div>
              <span className="activity-status">Actif</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🌱</div>
              <div className="activity-details">
                <p className="activity-title">Production BioFerNa mise à jour</p>
                <p className="activity-date">Il y a 1 jour</p>
              </div>
              <span className="activity-status">Complété</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📈</div>
              <div className="activity-details">
                <p className="activity-title">Rapport trimestriel généré</p>
                <p className="activity-date">Il y a 2 jours</p>
              </div>
              <span className="activity-status">Validé</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bailleurs */}
      <div className="card bailleurs-section">
        <h2>Aperçu des bailleurs</h2>
        <div className="bailleurs-grid">
          {bailleurs.map((bailleur) => (
            <div key={bailleur.id} className="bailleur-card">
              <h3>{bailleur.name}</h3>
              <div className="bailleur-stat">
                <span className="label">Investissement total</span>
                <span className="value">{bailleur.totalInvested.toLocaleString()} €</span>
              </div>
              <div className="bailleur-stat">
                <span className="label">Dépensé</span>
                <span className="value">{bailleur.spent.toLocaleString()} €</span>
              </div>
              <div className="bailleur-stat">
                <span className="label">Projets financés</span>
                <span className="value">{bailleur.projects}</span>
              </div>
              <div className="bailleur-progress">
                <span className="label">Exécution</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${bailleur.execution}%` }}></div>
                </div>
                <span className="percentage">{bailleur.execution}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projets par bailleur */}
      <div className="card funder-projects-section">
        <h2>Projets financés par bailleur</h2>
        <div className="funder-projects-table">
          <table>
            <thead>
              <tr>
                <th>Projet</th>
                <th>Bailleur</th>
                <th>Budget</th>
                <th>Dépensé</th>
                <th>Exécution</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectsByFunder.map((project, index) => (
                <tr key={index}>
                  <td><strong>{project.name}</strong></td>
                  <td>{project.funder}</td>
                  <td>{project.budget.toLocaleString()} €</td>
                  <td>{project.spent.toLocaleString()} €</td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${project.execution}%` }}></div>
                      </div>
                      <span>{project.execution}%</span>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="btn-small" 
                      title="Télécharger le rapport"
                      onClick={() => {
                        // TODO: Implémenter le téléchargement du rapport
                        console.log(`Téléchargement du rapport pour ${project.name}`)
                      }}
                    >
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Indicateurs clés */}
      <div className="card kpi-section">
        <h2>Indicateurs clés de performance</h2>
        <div className="kpi-grid">
          <div className="kpi-item">
            <div className="kpi-label">Hectares reboisés</div>
            <div className="kpi-value">2,450 ha</div>
            <div className="kpi-trend">+18% ce mois</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-label">Tonnes CO₂ séquestrées</div>
            <div className="kpi-value">8,320 t</div>
            <div className="kpi-trend">+12% ce mois</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-label">Femmes impliquées</div>
            <div className="kpi-value">845</div>
            <div className="kpi-trend">+25% ce mois</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-label">Taux d'exécution budget</div>
            <div className="kpi-value">72%</div>
            <div className="kpi-trend">-5% ce mois</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
