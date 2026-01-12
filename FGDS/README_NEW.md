# 🌱 FGDS - Family Green Digital System

> Plateforme numérique complète de gestion, suivi et reporting pour Family Green Corporation

## ✨ Fonctionnalités

- 📊 Tableau de bord avec graphiques interactifs
- 📁 Gestion complète des projets
- 📢 Gestion des campagnes de sensibilisation
- 💰 Suivi financier et budgétaire
- 🌱 Module BioFerNa (AGR)
- 📱 Collecte de données terrain
- 🏦 Espace d'accès pour les bailleurs
- 👥 Gestion des utilisateurs et rôles

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5175`

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - Guide de démarrage
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture du projet
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Guide de développement
- [MODULES_DOCUMENTATION.md](./MODULES_DOCUMENTATION.md) - Détails des modules
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Résumé du projet
- [CHANGELOG.md](./CHANGELOG.md) - Historique

## 💻 Stack technique

- React 19.2
- Vite 7.2
- React Router
- Recharts (Graphiques)
- Lucide React (Icônes)
- SCSS (Styling)

## 👥 Rôles utilisateurs

- Admin - Accès complet
- Chef de projet - Gestion des projets
- Animateur terrain - Collecte de données
- Financier/Comptable - Gestion budgets
- Bailleur - Visualisation des rapports

## 📊 Modules principaux

| Route | Module | Rôles |
|-------|--------|-------|
| / | Tableau de bord | Tous |
| /projects | Gestion projets | Admin, Chef, Animateur |
| /campaigns | Campagnes | Admin, Chef, Animateur |
| /financial | Suivi financier | Admin, Financier |
| /agr | BioFerNa - AGR | Admin, Chef, Animateur |
| /field-collection | Collecte terrain | Admin, Animateur |
| /funder | Accès bailleur | Bailleurs |
| /users | Gestion utilisateurs | Admin |

## 🎨 Design

- Responsive (Mobile, Tablet, Desktop)
- Thème vert (couleur primaire #2ecc71)
- Design moderne et professionnel
- Accessibilité WCAG

## 📦 Installation & Scripts

```bash
npm install              # Installer les dépendances
npm run dev             # Serveur de développement
npm run build           # Build production
npm run preview         # Prévisualiser le build
npm run lint            # Linter le code
```

## 🔗 Intégration Backend

Le service API est prêt pour l'intégration avec le backend :

```javascript
import apiService from './services/api'

await apiService.getProjects()
await apiService.createProject(data)
await apiService.login(email, password)
```

## 📞 Support

Pour plus d'informations, consultez la documentation complète fournie.

---

**Version:** 1.0.0  
**Statut:** ✅ Production Ready
