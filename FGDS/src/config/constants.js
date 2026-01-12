// Configuration et constantes de l'application

export const APP_CONFIG = {
  APP_NAME: 'FGDS - FGC Manager',
  VERSION: '1.0.0',
  LANGUAGE: 'fr',
}

export const ROLES = {
  ADMIN: 'admin',
  CHEF_PROJET: 'chef',
  ANIMATEUR: 'animateur',
  FINANCIER: 'financier',
  BAILLEUR: 'bailleur',
}

export const ROLE_LABELS = {
  admin: 'Administrateur',
  chef: 'Chef de projet',
  animateur: 'Animateur terrain',
  financier: 'Financier/Comptable',
  bailleur: 'Partenaire/Bailleur',
}

export const PROJECT_STATUS = {
  PLANNED: 'planned',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  PAUSED: 'paused',
  ARCHIVED: 'archived',
}

export const PROJECT_STATUS_LABELS = {
  planned: 'Planifié',
  active: 'Actif',
  completed: 'Terminé',
  paused: 'En pause',
  archived: 'Archivé',
}

export const MENU_ITEMS = [
  {
    label: 'Tableau de bord',
    path: '/',
    icon: 'dashboard',
    roles: ['admin', 'chef', 'animateur', 'financier', 'bailleur'],
  },
  {
    label: 'Gestion des projets',
    path: '/projects',
    icon: 'folder',
    roles: ['admin', 'chef', 'animateur'],
  },
  {
    label: 'Campagnes',
    path: '/campaigns',
    icon: 'megaphone',
    roles: ['admin', 'chef', 'animateur'],
  },
  {
    label: 'Suivi financier',
    path: '/financial',
    icon: 'dollar',
    roles: ['admin', 'financier'],
  },
  {
    label: 'BioFerNa - AGR',
    path: '/agr',
    icon: 'leaf',
    roles: ['admin', 'chef', 'animateur'],
  },
  {
    label: 'Collecte terrain',
    path: '/field-collection',
    icon: 'map-pin',
    roles: ['admin', 'animateur'],
  },
  {
    label: 'Accès bailleur',
    path: '/funder',
    icon: 'users',
    roles: ['admin', 'bailleur'],
  },
  {
    label: 'Gestion utilisateurs',
    path: '/users',
    icon: 'user-cog',
    roles: ['admin'],
  },
]

export const COLORS = {
  PRIMARY: '#2ecc71',
  SECONDARY: '#27ae60',
  ACCENT: '#3498db',
  DANGER: '#e74c3c',
  WARNING: '#f39c12',
  SUCCESS: '#27ae60',
  INFO: '#3498db',
  DARK: '#1a1a1a',
  LIGHT: '#f5f5f5',
  BORDER: '#e0e0e0',
}

export const API_ENDPOINTS = {
  BASE_URL: 'https://api.fgds.local/api',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  PROJECTS: '/projects',
  CAMPAIGNS: '/campaigns',
  FINANCIAL: '/financial',
  USERS: '/users',
  REPORTS: '/reports',
}
