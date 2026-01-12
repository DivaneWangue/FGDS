// Service pour les appels API
import { API_ENDPOINTS } from '../config/constants'

class ApiService {
  constructor() {
    this.baseURL = API_ENDPOINTS.BASE_URL
    this.token = null
  }

  setToken(token) {
    this.token = token
    localStorage.setItem('authToken', token)
  }

  getToken() {
    return this.token || localStorage.getItem('authToken')
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.getToken()) {
      headers['Authorization'] = `Bearer ${this.getToken()}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API error:', error)
      throw error
    }
  }

  // Auth
  login(email, password) {
    return this.request(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  logout() {
    this.token = null
    localStorage.removeItem('authToken')
    return this.request(API_ENDPOINTS.LOGOUT, { method: 'POST' })
  }

  // Projects
  getProjects() {
    return this.request(API_ENDPOINTS.PROJECTS)
  }

  getProject(id) {
    return this.request(`${API_ENDPOINTS.PROJECTS}/${id}`)
  }

  createProject(data) {
    return this.request(API_ENDPOINTS.PROJECTS, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  updateProject(id, data) {
    return this.request(`${API_ENDPOINTS.PROJECTS}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  deleteProject(id) {
    return this.request(`${API_ENDPOINTS.PROJECTS}/${id}`, {
      method: 'DELETE',
    })
  }

  // Campaigns
  getCampaigns() {
    return this.request(API_ENDPOINTS.CAMPAIGNS)
  }

  // Financial
  getFinancialData() {
    return this.request(API_ENDPOINTS.FINANCIAL)
  }

  // Reports
  generateReport(type, projectId) {
    return this.request(`${API_ENDPOINTS.REPORTS}/generate`, {
      method: 'POST',
      body: JSON.stringify({ type, projectId }),
    })
  }
}

export default new ApiService()
