# 🚀 Commandes Utiles - FGDS Frontend

## Démarrage et Développement

### Démarrer le serveur de développement
```bash
npm run dev
```
- Ouvre sur `http://localhost:5175`
- Auto-reload à la sauvegarde
- Port auto-incrémenté si occupé (5173, 5174, 5175...)

### Build pour la production
```bash
npm run build
```
- Génère les fichiers optimisés dans le dossier `dist`
- Minification et tree-shaking
- Ready pour Vercel

### Aperçu du build
```bash
npm run preview
```
- Prévisualise le build local avant production

### Linting
```bash
npm run lint
```
- Vérifie la qualité du code avec ESLint
- Détecte les erreurs et warnings

---

## Navigation du Projet

### Structure des fichiers
```
src/
├── components/           # Composants réutilisables
│   ├── Modal/
│   ├── Toast/
│   ├── DataTable/
│   ├── ConfirmDialog/
│   ├── Navbar/
│   └── Sidebar/
├── pages/               # Pages principales
│   ├── Dashboard/
│   ├── Projects/
│   ├── Campaigns/
│   ├── UserManagement/
│   ├── FinancialTracking/
│   ├── AgrModule/
│   ├── FieldCollection/
│   ├── FunderAccess/
│   └── Login/
├── hooks/               # Custom hooks
│   ├── useToast.js
│   └── useApi.js
├── services/            # Services API
│   └── api.js
├── config/              # Configuration
│   └── constants.js
├── styles/              # Styles globaux
└── assets/              # Images, fonts, etc.
```

---

## Terminal Utile

### Vérifier les versions
```bash
npm --version     # Version npm
node --version    # Version Node.js
```

### Nettoyer les dépendances
```bash
npm cache clean --force
```

### Réinstaller les dépendances
```bash
rm -r node_modules
npm install
```

### Installer une dépendance
```bash
npm install nom-du-package
npm install --save-dev nom-du-package
```

### Désinstaller une dépendance
```bash
npm uninstall nom-du-package
```

---

## Debugging

### Console du Navigateur
1. Ouvrez DevTools: `F12` ou `Ctrl+Shift+I`
2. Allez sur l'onglet "Console"
3. Vérifiez les erreurs JavaScript

### React DevTools
1. Installez l'extension Chrome: [React DevTools](https://chrome.google.com/webstore)
2. Allez sur l'onglet "Components"
3. Inspectez les props et état

### Network Tab
1. Ouvrez DevTools
2. Allez sur l'onglet "Network"
3. Faites une action et vérifiez les requêtes

### Vérifier les Toasts
1. Faites une action (créer, éditer, supprimer)
2. Regardez en haut à droite pour les notifications
3. Cliquez pour fermer

---

## Git Workflow

### Vérifier le statut
```bash
git status
```

### Ajouter les fichiers
```bash
git add .
```

### Commit
```bash
git commit -m "Description des changements"
```

### Push
```bash
git push origin main
```

### Voir l'historique
```bash
git log --oneline
```

---

## Astuces Performance

### Optimisation du Build
- Les imports SCSS sont au minimum
- Tree-shaking automatique avec Vite
- Code splitting par route (à implémenter)

### Optimisation du Runtime
- useCallback pour les handlers
- useMemo pour les calculs lourds
- Pagination pour les grandes listes

### Déboguer la Performance
```bash
npm run build -- --stats  # Voir la taille des chunks
```

---

## Déploiement Vercel

### Préparation
```bash
npm run build  # Vérifier que le build passe
npm run lint   # Vérifier la qualité du code
```

### Déployer
1. Poussez sur GitHub: `git push`
2. Allez sur [Vercel](https://vercel.com)
3. Importez le repo GitHub
4. Vercel build automatiquement

### Variables d'Environnement
Créez un fichier `.env.local`:
```
VITE_API_URL=https://votre-backend.com/api
VITE_APP_NAME=FGDS
```

---

## Problèmes Courants et Solutions

### "Port already in use"
```bash
# Cherchez le processus
lsof -i :5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# Tuez le processus
kill -9 PID  # macOS/Linux
taskkill /PID PID /F  # Windows
```

### "Module not found"
```bash
# Réinstallez les dépendances
npm install
```

### "Build failed"
```bash
# Nettoyez et réinstallez
rm -r node_modules dist package-lock.json
npm install
npm run build
```

### "Les changements ne s'affichent pas"
1. Videz le cache du navigateur: `Ctrl+Shift+Del`
2. Rechargez la page: `Ctrl+F5`
3. Redémarrez le serveur dev

### "Toast ne s'affiche pas"
1. Vérifiez que App.jsx importe ToastProvider
2. Vérifiez que useToast() est appelé dans le composant
3. Vérifiez la console pour les erreurs

---

## Tests Rapides

### Tester le Login
```
Email: admin@example.com
Rôle: Admin (accès complet)
```

### Tester les Permissions
```
admin@example.com        → Admin
chef@example.com         → Chef de projet
bailleur@example.com     → Bailleur
animateur@example.com    → Animateur
```

### Tester les Notifications
1. Allez sur Projects
2. Cliquez "+ Nouveau projet"
3. Remplissez et créez
4. Voir le toast vert "Projet créé avec succès"

### Tester la Recherche
1. Allez sur Projects
2. Tapez dans la barre de recherche
3. Voir les résultats filtrés en temps réel

### Tester le Tri
1. Cliquez sur un en-tête de colonne
2. Voir les données triées
3. Cliquez à nouveau pour inverser

---

## Ressources Utiles

### Documentation
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [SCSS Docs](https://sass-lang.com)

### Outils
- [VS Code](https://code.visualstudio.com)
- [React DevTools](https://chrome.google.com/webstore)
- [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)

### Package Manager
- [npm](https://www.npmjs.com)

---

## Assistance

### Si le serveur crashe:
1. Appuyez sur `q` dans le terminal pour arrêter
2. Redémarrez avec `npm run dev`

### Si les dépendances sont cassées:
```bash
npm ci  # Clean install au lieu de npm install
```

### Pour un rapport détaillé:
```bash
npm list  # Liste toutes les dépendances
```

---

## Checklist de Déploiement

- [ ] `npm run build` réussit
- [ ] `npm run lint` sans erreurs
- [ ] Variables d'env configurées
- [ ] API URL pointée correctement
- [ ] `.env.local` n'est PAS commité
- [ ] `dist/` n'est PAS commité
- [ ] `node_modules/` n'est PAS commité
- [ ] `.gitignore` configured
- [ ] Tests manuels réussis
- [ ] Git push fait

---

**Besoin d'aide ? Consultez TESTING_GUIDE.md ou INTERACTIVE_FEATURES.md**
