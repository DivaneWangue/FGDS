# Guide de développement FGDS

## Structure du projet

```
src/
├── pages/              # Pages principales de l'application
├── components/         # Composants réutilisables
├── config/             # Configuration et constantes
├── hooks/              # Custom hooks React
├── services/           # Services API et utilitaires
├── assets/             # Images, fonts, etc.
├── App.jsx            # Composant racine
├── App.scss           # Styles globaux
├── main.jsx           # Point d'entrée
└── index.css          # Styles de base
```

## Conventions de codage

### Composants
- Noms en PascalCase : `Dashboard.jsx`, `ProjectCard.jsx`
- Un fichier par composant principal
- Fichier SCSS du même nom : `Dashboard.jsx` + `Dashboard.scss`
- Importer les styles SCSS à la racine du composant

### CSS/SCSS
- Variables de couleur définies dans `App.scss`
- Importer `App.scss` pour accéder aux variables dans chaque fichier
- Utiliser BEM ou système de nommage cohérent
- Pas de styles inline

### Fichiers
- Minuscules avec tirets pour les fichiers : `field-collection.jsx`
- PascalCase pour les répertoires : `/Dashboard`, `/FieldCollection`

## Ajouter une nouvelle page

1. Créer un dossier dans `src/pages/`
2. Créer `Page.jsx` et `Page.scss`
3. Ajouter la route dans `App.jsx`
4. Ajouter l'entrée menu si nécessaire

Exemple :
```jsx
// src/pages/NewPage/NewPage.jsx
import React from 'react'
import './NewPage.scss'

const NewPage = ({ userRole }) => {
  return (
    <div className="new-page">
      <h1>Nouvelle page</h1>
    </div>
  )
}

export default NewPage
```

## Ajouter un composant réutilisable

1. Créer un dossier dans `src/components/`
2. Créer le fichier JSX et SCSS
3. Exporter le composant

Exemple :
```jsx
// src/components/Button/Button.jsx
import './Button.scss'

const Button = ({ children, variant = 'primary', ...props }) => (
  <button className={`btn btn-${variant}`} {...props}>
    {children}
  </button>
)

export default Button
```

## Utiliser les hooks personnalisés

```jsx
import { useAuth, useProjects, useNotifications } from '../hooks/useCustomHooks'

function MyComponent() {
  const { user, login, logout } = useAuth()
  const { projects, addProject } = useProjects()
  const { addNotification } = useNotifications()

  return (
    // Votre code
  )
}
```

## API et services

Utiliser le service API pour les appels :

```jsx
import apiService from '../services/api'

// Dans un useEffect
useEffect(() => {
  apiService.getProjects()
    .then(data => setProjects(data))
    .catch(error => console.error(error))
}, [])
```

## Variables SCSS disponibles

```scss
$primary-color: #2ecc71
$secondary-color: #27ae60
$accent-color: #3498db
$danger: #e74c3c
$warning: #f39c12
$success: #27ae60
$info: #3498db

$spacing-xs: 4px
$spacing-sm: 8px
$spacing-md: 16px
$spacing-lg: 24px
$spacing-xl: 32px

$transition: all 0.3s ease
```

## Classes CSS utilitaires

```html
<!-- Boutons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-small">Small</button>

<!-- Grilles -->
<div class="grid grid-2"><!-- 2 colonnes --></div>
<div class="grid grid-3"><!-- 3 colonnes --></div>
<div class="grid grid-4"><!-- 4 colonnes --></div>

<!-- Cartes -->
<div class="card">Contenu</div>
```

## Gestion de l'authentification

Le composant `Login` gère actuellement l'authentification de manière simulée. À intégrer avec votre backend :

```jsx
// App.jsx
const [isLoggedIn, setIsLoggedIn] = useState(false)

// Dans Login.jsx
const handleLogin = async (e) => {
  e.preventDefault()
  const success = await apiService.login(email, password)
  if (success) onLogin()
}
```

## Rôles et permissions

Les rôles sont gérés via le prop `userRole` passé aux composants. Vérifier les permissions dans chaque page :

```jsx
{userRole !== 'bailleur' && (
  <button>Action réservée aux admins</button>
)}
```

## Performance

- Utiliser `React.memo()` pour les composants lourds
- Utiliser `useCallback()` pour les fonctions dans les props
- Lazy load les pages si nécessaire

## Testing

À implémenter avec Jest/React Testing Library

## Déploiement

```bash
# Build production
npm run build

# Prévisualiser
npm run preview

# Lint
npm run lint
```

## Ressources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Recharts Docs](https://recharts.org)
- [Lucide Icons](https://lucide.dev)

---

Pour toute question, consultez la documentation ou contactez l'équipe.
