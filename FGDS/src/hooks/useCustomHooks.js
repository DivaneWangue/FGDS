import { useState, useCallback } from 'react'

// Hook pour gérer l'authentification
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (email) => {
    setLoading(true)
    try {
      // Simule un appel API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUser({ email, name: 'Utilisateur', role: 'admin' })
      setIsLoggedIn(true)
      return true
    } catch (error) {
      console.error('Erreur de connexion:', error)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsLoggedIn(false)
  }, [])

  return { isLoggedIn, user, loading, login, logout }
}

// Hook pour gérer les données des projets
export const useProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'REPREHREC', status: 'active', funder: 'AFD', budget: 150000, progress: 75 },
    { id: 2, title: 'ABICOM', status: 'active', funder: 'UE', budget: 120000, progress: 60 },
  ])
  const [loading] = useState(false)

  const addProject = useCallback((project) => {
    setProjects(prev => [...prev, { ...project, id: Date.now() }])
  }, [])

  const updateProject = useCallback((id, updates) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p))
  }, [])

  const deleteProject = useCallback((id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }, [])

  return { projects, loading, addProject, updateProject, deleteProject }
}

// Hook pour gérer les notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }, [])

  const addNotification = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message, type }])
    
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }, [removeNotification])

  return { notifications, addNotification, removeNotification }
}
