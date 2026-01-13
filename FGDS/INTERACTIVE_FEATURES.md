# FGDS Interactive Frontend - Fonctionnalités Interactives

## Vue d'ensemble

Le frontend FGDS est maintenant **entièrement interactif** avec les fonctionnalités suivantes :

### ✨ Fonctionnalités Interactives

#### 1. **Système de Notification (Toast)**
- Notifications automatiques pour les actions (créer, modifier, supprimer)
- Types : succès, erreur, avertissement, info
- Auto-fermeture après 3 secondes
- Fermeture manuelle possible

#### 2. **Formulaires Interactifs**
Tous les formulaires incluent :
- Validation en temps réel
- Gestion d'erreurs
- Champs requis marqués avec `*`
- Support des champs texte, email, date, nombre, select, textarea
- Feedback utilisateur instantané

#### 3. **Modales (Pop-ups)**
- Modal pour créer/éditer les projets, campagnes, utilisateurs
- Fermeture au clic sur l'overlay
- Bouton fermeture (X)
- Footer personnalisable
- Tailles : sm, md, lg, xl

#### 4. **Confirmation de Suppression**
- Dialog de confirmation avant suppression
- Message d'avertissement personnalisé
- Option "suppression dangereuse" (bouton rouge)

#### 5. **Tableau de Données Interactif (DataTable)**
- **Recherche** : filtrage en temps réel
- **Tri** : ascendant/descendant avec flèches visuelles
- **Pagination** : navigation entre les pages
- **Actions par ligne** : boutons éditer/supprimer

#### 6. **Gestion des Pages Principales**

##### **Login** 
- Validation email
- Toggle affichage/masquage mot de passe
- Sélection de rôle basée sur email (demo)
- Messages d'erreur clairs

```
Demo emails:
- admin@example.com → Rôle Admin
- chef@example.com → Rôle Chef de projet
- bailleur@example.com → Rôle Bailleur
- animateur@example.com → Rôle Animateur
```

##### **Gestion des Projets** ✅
- ✅ Créer un projet (bouton "+ Nouveau projet")
- ✅ Éditer un projet (clic sur l'icône éditer)
- ✅ Supprimer un projet (avec confirmation)
- ✅ Rechercher/filtrer les projets
- ✅ Trier par colonne
- ✅ Paginer la liste

##### **Gestion des Campagnes** ✅
- ✅ Créer une campagne
- ✅ Éditer une campagne
- ✅ Supprimer une campagne
- ✅ Rechercher/filtrer
- ✅ Trier par colonne
- ✅ Paginer la liste

##### **Gestion des Utilisateurs** ✅
- ✅ Créer un utilisateur (Admin seulement)
- ✅ Éditer un utilisateur
- ✅ Supprimer un utilisateur
- ✅ Validation email
- ✅ Sélection de rôle
- ✅ Statut actif/inactif

##### **Menu Utilisateur (Navbar)** ✅
- ✅ Dropdown profil utilisateur
- ✅ Bouton déconnexion
- ✅ Affichage du rôle

#### 7. **Gestion d'État**

##### **useToast Hook**
```javascript
import { useToast } from './hooks/useToast'

const { addToast } = useToast()
addToast('Message de succès', 'success', 3000)
addToast('Erreur!', 'error')
```

##### **useApi & useApiMutation**
```javascript
import { useApi, useApiMutation } from './hooks/useApi'

// Lecture
const { data, loading, error, fetchData } = useApi('/api/projects')

// Mutation
const { execute, loading, error } = useApiMutation(apiService.createProject)
```

#### 8. **Composants Réutilisables**

##### **Modal**
```jsx
<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Titre du modal"
  size="lg"
  footer={<button>Action</button>}
>
  {/* contenu */}
</Modal>
```

##### **DataTable**
```jsx
<DataTable
  data={items}
  columns={[
    { key: 'name', label: 'Nom' },
    { key: 'status', label: 'Statut', render: (val) => <Badge>{val}</Badge> }
  ]}
  searchable={true}
  sortable={true}
  paginated={true}
  itemsPerPage={10}
  actions={(row) => <button onClick={() => edit(row)}>Éditer</button>}
/>
```

##### **ConfirmDialog**
```jsx
<ConfirmDialog
  isOpen={showConfirm}
  title="Confirmer l'action"
  message="Êtes-vous sûr ?"
  onConfirm={handleDelete}
  onCancel={() => setShowConfirm(false)}
  isDangerous={true}
/>
```

##### **Toast System**
```jsx
<Toast toasts={toasts} onRemove={removeToast} />
```

### 🎯 Flux Utilisateur Complet

1. **Login** → Entrez un email (ex: admin@example.com)
2. **Dashboard** → Vue d'ensemble avec statistiques
3. **Projets** → CRUD complet sur les projets
4. **Campagnes** → CRUD complet sur les campagnes
5. **Utilisateurs** → Gestion des utilisateurs (Admin)
6. **Notifications** → Toast automatiques pour chaque action
7. **Déconnexion** → Menu utilisateur → "Déconnexion"

### 🔧 Fonctionnalités Technique

#### Contrôle d'Accès par Rôle (RBAC)
- Admin : Accès complet
- Chef de projet : Gestion projets/campagnes
- Bailleur : Lecture seule
- Animateur : Accès limité

#### Validation des Données
- Emails valides
- Champs requis
- Nombres positifs
- Dates valides

#### Gestion d'Erreurs
- Messages d'erreur clairs
- Validation côté client
- Feedback utilisateur immédiat

### 📱 Responsive Design
- Desktop optimisé
- Tablet friendly
- Mobile responsive
- Menu hamburger sur petits écrans

### 🚀 Améliorations Futures

1. Intégration backend réelle (Laravel + PostgreSQL)
2. Authentification JWT
3. Téléchargement de fichiers
4. Rapports PDF
5. Graphiques interactifs
6. Historique d'audit
7. Notifications en temps réel (WebSocket)
8. Export CSV/Excel
9. Recherche avancée
10. Filtres personnalisés

### 📦 Technologies Utilisées

- React 19
- React Router DOM 7
- Recharts (Graphiques)
- Lucide Icons
- SCSS/Sass
- Vite

---

**Status** : ✅ Entièrement interactif et prêt pour les tests
