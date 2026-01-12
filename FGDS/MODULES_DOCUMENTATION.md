# Documentation des modules FGDS

## 1. Module Tableau de bord

**Route** : `/`

**Composant** : `Dashboard.jsx`

### Fonctionnalités
- Vue synthétique des statistiques clés
- 4 cartes de statistiques : Projets, Campagnes, Bénéficiaires, Budget
- Graphique d'évolution des participations
- Graphique du statut des projets (pie chart)
- Graphique des bénéficiaires par catégorie
- Historique des activités récentes
- Section KPI avec indicateurs environnementaux

### Données affichées
- Nombre de projets actifs
- Nombre de campagnes
- Total des bénéficiaires
- Budget total
- Hectares reboisés
- Tonnes de CO₂ séquestrées
- Femmes impliquées
- Taux d'exécution budgétaire

### Accès
- Tous les rôles

---

## 2. Module Gestion des projets

**Route** : `/projects`

**Composant** : `Projects.jsx`

### Fonctionnalités
- Tableau listant tous les projets
- Affichage : Titre, Bailleur, Budget, Progression, Statut
- Barre de progression visuelle pour chaque projet
- Actions : Voir, Éditer, Supprimer
- Bouton "Nouveau projet"
- Filtre par statut et bailleur

### Statuts disponibles
- Planifié
- Actif
- Terminé

### Accès
- Admin, Chef de projet, Animateur terrain

---

## 3. Module Campagnes

**Route** : `/campaigns`

**Composant** : `Campaigns.jsx`

### Fonctionnalités
- Affichage en grille des campagnes
- Cartes avec : Titre, Région, Nombre de participants, Statut
- Actions : Éditer, Supprimer
- Création de nouvelles campagnes

### Données
- Titre de la campagne
- Région couverte
- Nombre de participants
- Statut (Actif / Terminé)

### Accès
- Admin, Chef de projet, Animateur terrain

---

## 4. Module Suivi financier

**Route** : `/financial`

**Composant** : `FinancialTracking.jsx`

### Fonctionnalités
- 3 cartes de résumé : Budget total, Dépenses, Solde
- Tableau détaillé par projet
- Colonnes : Projet, Budget, Dépensé, Restant, % d'exécution
- Graphique Revenus vs Dépenses (bar chart mensuel)
- Génération de rapports

### Indicateurs financiers
- Budget alloué par projet
- Montant dépensé
- Solde restant
- Pourcentage d'exécution
- Comparaison revenus/dépenses

### Accès
- Admin, Financier/Comptable

---

## 5. Module BioFerNa - AGR

**Route** : `/agr`

**Composant** : `AgrModule.jsx`

### Fonctionnalités
- Statistiques globales : Production totale, Revenus, Zones actives, Emplois
- Liste des projets AGR actifs
- Pour chaque projet : Nom, Localisation, Production, Revenus

### Données suivies
- Production en kg
- Revenus générés
- Nombre de zones
- Emplois créés
- Localisation des activités

### Accès
- Admin, Chef de projet, Animateur terrain

---

## 6. Module Collecte de données terrain

**Route** : `/field-collection`

**Composant** : `FieldCollection.jsx`

### Fonctionnalités
- Indicateur de connexion (En ligne / Hors ligne)
- Bouton pour créer un nouveau formulaire
- Liste des données collectées
- Statut de synchronisation pour chaque formulaire

### Données collectées
- Formulaires terrain
- Localisation GPS
- Photos et vidéos
- Informations bénéficiaires

### Modes
- **En ligne** : Synchronisation en temps réel
- **Hors ligne** : Mise en cache, synchronisation automatique à la reconnexion

### Accès
- Admin, Animateur terrain

---

## 7. Module Accès bailleur

**Route** : `/funder`

**Composant** : `FunderAccess.jsx`

### Fonctionnalités
- Résumé des investissements
- Liste des projets financés par l'utilisateur
- Pour chaque projet : Nom, Budget, Montant dépensé, Progression
- Graphique de progression
- Accès aux rapports validés
- Téléchargement des rapports en PDF

### Données visibles
- Montant total investi
- Montant dépensé
- Taux moyen d'exécution
- Détails par projet

### Accès
- Bailleurs (lecture seule)
- Admin

---

## 8. Module Gestion des utilisateurs

**Route** : `/users`

**Composant** : `UserManagement.jsx`

### Fonctionnalités
- Tableau de tous les utilisateurs
- Colonnes : Nom, Email, Rôle, Statut
- Actions : Éditer, Gérer permissions, Supprimer
- Description des rôles disponibles
- Création de nouveaux comptes

### Rôles gérables
1. **Administrateur** - Accès complet
2. **Chef de projet** - Gestion projets
3. **Animateur terrain** - Collecte de données
4. **Financier/Comptable** - Gestion budgets
5. **Partenaire/Bailleur** - Lecture seule

### Accès
- Admin uniquement

---

## 9. Page de connexion

**Route** : `/login`

**Composant** : `Login.jsx`

### Fonctionnalités
- Formulaire de connexion (Email + Mot de passe)
- Option "Se souvenir de moi"
- Lien "Mot de passe oublié"
- Affichage/Masquage du mot de passe
- Sidebar informatif

### Authentification
- Validation du formulaire
- Intégration avec le service API
- Gestion des sessions
- Stockage du token d'authentification

---

## Intégration avec le backend

Tous les appels API doivent passer par le service `apiService` dans `src/services/api.js`.

### Endpoints attendus

**Authentification**
```
POST /api/auth/login
POST /api/auth/logout
```

**Projets**
```
GET /api/projects
GET /api/projects/{id}
POST /api/projects
PUT /api/projects/{id}
DELETE /api/projects/{id}
```

**Campagnes**
```
GET /api/campaigns
POST /api/campaigns
```

**Financier**
```
GET /api/financial
GET /api/financial/{projectId}
POST /api/financial/reports
```

---

## Flux utilisateur typique

1. **Connexion** → Page de login
2. **Tableau de bord** → Vue globale des indicateurs
3. **Gestion projets** → Créer/Modifier/Suivre les projets
4. **Campagnes** → Planifier les campagnes
5. **Collecte terrain** → Enregistrer les données
6. **Suivi financier** → Vérifier budgets et dépenses
7. **Rapports** → Générer rapports pour bailleurs

---

## Notes importantes

- Toutes les dates utilisent le format local français
- Les montants sont en euros (€)
- Les distances en hectares (ha)
- Le poids en tonnes (t) ou kg
- Interface responsive (mobile, tablet, desktop)
