import React, { useState } from 'react'
import { Leaf, Eye, EyeOff } from 'lucide-react'
import './Login.scss'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      onLogin()
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Leaf size={48} className="logo-icon" />
          <h1>FGDS</h1>
          <p>Family Green Digital System</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Se souvenir de moi
            </label>
            <a href="#forget">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="login-footer">
          <p>Pas encore de compte ? <a href="#signup">S'inscrire</a></p>
        </div>
      </div>

      <div className="login-sidebar">
        <div className="sidebar-content">
          <h2>Bienvenue sur FGDS</h2>
          <p>La plateforme complète de gestion des projets et activités de Family Green Corporation</p>
          <ul className="features">
            <li>✓ Gestion intégrée des projets</li>
            <li>✓ Suivi financier en temps réel</li>
            <li>✓ Tableaux de bord multi-projets</li>
            <li>✓ Accès sécurisé pour les bailleurs</li>
            <li>✓ Collecte de données terrain</li>
            <li>✓ Rapports automatisés</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login
