# 🚀 FGDS - Quick Start Guide

## Installation rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:5175
```

## Commandes disponibles

```bash
# Développement
npm run dev              # Lancer le serveur dev (port 5175)

# Production
npm run build            # Build pour la production
npm run preview          # Prévisualiser le build

# Qualité du code
npm run lint             # Linter le code

# Info
npm run help             # Afficher l'aide Vite
```

## Accès aux modules

Une fois l'app lancée, accédez aux modules :

| Module | URL |
|--------|-----|
| Connexion | `/login` |
| Tableau de bord | `/` ou `/dashboard` |
| Gestion projets | `/projects` |
| Campagnes | `/campaigns` |
| Suivi financier | `/financial` |
| BioFerNa - AGR | `/agr` |
| Collecte terrain | `/field-collection` |
| Accès bailleur | `/funder` |
| Gestion utilisateurs | `/users` |

## Identifiants de test

**Login page** (actuellement en mode démo) :
- Email : n'importe quel email
- Mot de passe : n'importe quel mot de passe

> Note : L'authentification sera intégrée avec le backend

## Structure des dossiers

```
FGDS/
├── src/
│   ├── pages/                 # Pages principales
│   │   ├── Dashboard/
│   │   ├── Projects/
│   │   ├── Campaigns/
│   │   ├── FinancialTracking/
│   │   ├── AgrModule/
│   │   ├── FieldCollection/
│   │   ├── FunderAccess/
│   │   ├── UserManagement/
│   │   └── Login/
│   ├── components/            # Composants réutilisables
│   │   ├── Sidebar/
│   │   └── Navbar/
│   ├── config/                # Configuration
│   │   └── constants.js
│   ├── hooks/                 # Hooks React
│   │   └── useCustomHooks.js
│   ├── services/              # Services API
│   │   └── api.js
│   ├── assets/                # Ressources
│   ├── App.jsx               # Composant root
│   ├── App.scss              # Styles globaux
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles de base
├── public/                    # Fichiers statiques
├── package.json              # Dépendances
├── vite.config.js           # Configuration Vite
└── index.html               # HTML racine
```

## Fonctionnalités implémentées

✅ **Frontend complet** avec 8 modules principaux
✅ **Design responsive** (mobile, tablet, desktop)
✅ **Système de rôles** (5 rôles utilisateur)
✅ **Graphiques** (LineChart, BarChart, PieChart)
✅ **Navigation fluide** avec React Router
✅ **SCSS modulaire** avec variables globales
✅ **Composants réutilisables** (Navbar, Sidebar)
✅ **Service API** prêt pour le backend

## À faire (Prochaines étapes)

### Phase Backend (Priorité haute)
- [ ] API Laravel avec authentification JWT
- [ ] Base de données PostgreSQL
- [ ] CRUD pour tous les modules
- [ ] Génération de rapports PDF
- [ ] Webhook pour notifications

### Phase Améliorations (Priorité moyenne)
- [ ] Tests automatisés
- [ ] Error boundaries
- [ ] Loading states améliorés
- [ ] Pagination avancée
- [ ] Recherche full-text
- [ ] Export Excel/CSV

### Phase Mobile (Priorité basse)
- [ ] PWA (Progressive Web App)
- [ ] App native Android
- [ ] Synchronisation offline
- [ ] Caméra et GPS

## Recommandations de développement

### ✨ Bonnes pratiques
1. Utiliser le service API pour tous les appels
2. Importer les constantes depuis `config/constants.js`
3. Utiliser les hooks personnalisés
4. Garder les composants fonctionnels et réutilisables
5. Respecter la structure SCSS

### 🔍 Debugging
```javascript
// Dans la console du navigateur
// Vérifier l'état des routes
window.location.pathname

// Vérifier les props
console.log(props)

// Faire un test d'API
import apiService from './services/api'
apiService.getProjects()
```

### 📊 Performance
- L'app utilise Vite (très rapide)
- HMR (Hot Module Reload) activé
- SCSS compilé à la demande
- Recharts optimisé pour les graphiques

## Intégration Backend

### API Endpoints attendus

```
Base URL: https://api.fgds.local/api

Authentification
POST   /auth/login
POST   /auth/logout

Projets
GET    /projects
GET    /projects/{id}
POST   /projects
PUT    /projects/{id}
DELETE /projects/{id}

Campagnes
GET    /campaigns
POST   /campaigns

Financier
GET    /financial
POST   /financial/reports

Utilisateurs
GET    /users
POST   /users
```

### Intégration rapide

1. Remplacer `API_ENDPOINTS.BASE_URL` dans `src/config/constants.js`
2. Utiliser `apiService` pour les appels
3. Ajouter la logique d'authentification JWT

```javascript
// Exemple
apiService.login(email, password)
  .then(response => {
    apiService.setToken(response.token)
    // Rediriger vers dashboard
  })
```

## Dépendances principales

- **react** - UI framework
- **react-router-dom** - Routage
- **recharts** - Graphiques
- **lucide-react** - Icons
- **sass** - Styling SCSS
- **vite** - Build tool

## Support et Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture globale
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Guide de développement
- [MODULES_DOCUMENTATION.md](./MODULES_DOCUMENTATION.md) - Détails des modules
- [CHANGELOG.md](./CHANGELOG.md) - Historique des versions

## Troubleshooting

### Port déjà utilisé
```bash
# Vite trouvera automatiquement un port disponible
# Ou forcez un port spécifique
npm run dev -- --port 3000
```

### Cache de build
```bash
# Nettoyer le cache
rm -rf node_modules
npm install
npm run dev
```

### Erreurs SCSS
- Les avertissements Sass sont normaux (dépendance)
- Utiliser `@use` à la place de `@import` (futurs projets)

---

**Bienvenue dans le projet FGDS !** 🌱🌍

Pour toute question, consultez la documentation ou contactez l'équipe de développement.
