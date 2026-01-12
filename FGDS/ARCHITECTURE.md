# FGDS - Family Green Digital System

Plateforme numérique intégrée de gestion, suivi et reporting des projets et activités de la Family Green Corporation.

## 🚀 Fonctionnalités

### Modules principaux

1. **Tableau de bord** - Vue synthétique de tous les indicateurs clés
2. **Gestion des projets** - Création, modification et suivi des projets
3. **Campagnes** - Planification et suivi des campagnes environnementales
4. **Suivi financier** - Gestion des budgets et rapports financiers
5. **BioFerNa - AGR** - Gestion des activités génératrices de revenus
6. **Collecte de données terrain** - Application mobile et formulaires hors-ligne
7. **Accès bailleur** - Espace sécurisé pour les bailleurs de fonds
8. **Gestion des utilisateurs** - Rôles et permissions

## 🏗️ Architecture

```
src/
├── pages/
│   ├── Login/              # Page de connexion
│   ├── Dashboard/          # Tableau de bord principal
│   ├── Projects/           # Gestion des projets
│   ├── Campaigns/          # Gestion des campagnes
│   ├── FinancialTracking/  # Suivi financier
│   ├── AgrModule/          # Module BioFerNa
│   ├── FieldCollection/    # Collecte terrain
│   ├── FunderAccess/       # Espace bailleurs
│   └── UserManagement/     # Gestion des utilisateurs
├── components/
│   ├── Sidebar/            # Barre de navigation latérale
│   └── Navbar/             # Barre de navigation supérieure
├── App.jsx                 # Composant racine
├── App.scss                # Styles globaux
└── main.jsx               # Point d'entrée
```

## 🎨 Design

- **Couleur primaire** : Vert (#2ecc71) - représente la nature et l'environnement
- **Palette** : Dégradés verts, bleus et oranges pour une interface moderne
- **Responsive** : Adapté pour desktop, tablet et mobile
- **Accessibilité** : Contraste suffisant et navigation au clavier

## 🛠️ Technologies utilisées

- **React 19** - Framework UI
- **Vite** - Build tool rapide
- **React Router** - Navigation
- **Recharts** - Graphiques et visualisations
- **Lucide React** - Icons
- **SCSS** - Styling modulaire
- **Sass** - Préprocesseur CSS

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 👥 Rôles utilisateurs

| Rôle | Permissions |
|------|-------------|
| **Admin** | Accès complet, gestion utilisateurs |
| **Chef de projet** | Gestion projets et activités |
| **Animateur terrain** | Collecte de données, suivi bénéficiaires |
| **Financier/Comptable** | Gestion budgets et rapports financiers |
| **Bailleur** | Consultation projets et rapports (lecture seule) |

## 🔒 Sécurité

- Authentification multi-rôles
- Gestion des permissions granulaires
- Sauvegardes automatiques
- Encryption HTTPS

## 📊 Indicateurs clés suivis

- Hectares reboisés
- Tonnes de CO₂ séquestrées
- Nombre de bénéficiaires
- Femmes et jeunes impliqués
- Taux d'exécution budgétaire
- Revenus des AGR

## 🌐 Langues

- Français
- Anglais (préparation)

## 📞 Support

Pour toute question ou bug, veuillez contacter l'équipe de développement FGDS.

---

**Version** : 1.0.0  
**Date** : Janvier 2026
