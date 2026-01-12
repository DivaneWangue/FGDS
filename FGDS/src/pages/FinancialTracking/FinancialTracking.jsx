import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download, FileText } from 'lucide-react'
import './FinancialTracking.scss'

const FinancialTracking = ({ userRole }) => {
  const budgetData = [
    { project: 'REPREHREC', budget: 150000, spent: 112500, remaining: 37500 },
    { project: 'ABICOM', budget: 120000, spent: 72000, remaining: 48000 },
    { project: 'GEVES', budget: 100000, spent: 80000, remaining: 20000 },
  ]

  const monthlyData = [
    { month: 'Jan', income: 50000, expenses: 35000 },
    { month: 'Fév', income: 60000, expenses: 42000 },
    { month: 'Mar', income: 55000, expenses: 38000 },
    { month: 'Avr', income: 70000, expenses: 50000 },
    { month: 'Mai', income: 75000, expenses: 52000 },
  ]

  return (
    <div className="financial-page">
      <div className="page-header">
        <h1>Suivi financier</h1>
        {userRole === 'admin' && (
          <button className="btn btn-primary">
            <FileText size={20} /> Générer rapport
          </button>
        )}
      </div>

      <div className="grid grid-3">
        <div className="financial-card">
          <h3>Budget total</h3>
          <p className="amount">370,000 €</p>
          <small>Ensemble des projets</small>
        </div>
        <div className="financial-card">
          <h3>Dépenses</h3>
          <p className="amount">264,500 €</p>
          <small>71.5% du budget</small>
        </div>
        <div className="financial-card">
          <h3>Solde</h3>
          <p className="amount success">105,500 €</p>
          <small>28.5% restant</small>
        </div>
      </div>

      <div className="card">
        <h2>Budget par projet</h2>
        <div className="budget-table">
          <table>
            <thead>
              <tr>
                <th>Projet</th>
                <th>Budget alloué</th>
                <th>Dépensé</th>
                <th>Restant</th>
                <th>% exécution</th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.project}</strong></td>
                  <td>{row.budget.toLocaleString()} €</td>
                  <td>{row.spent.toLocaleString()} €</td>
                  <td>{row.remaining.toLocaleString()} €</td>
                  <td>
                    <div className="progress">
                      <div style={{ width: `${(row.spent / row.budget) * 100}%` }}></div>
                    </div>
                    {((row.spent / row.budget) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Revenus vs Dépenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#2ecc71" name="Revenus" />
            <Bar dataKey="expenses" fill="#e74c3c" name="Dépenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FinancialTracking
