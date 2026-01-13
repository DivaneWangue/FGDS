# Guide d'Utilisation - Test des Fonctionnalités Interactives

## 🎯 Quick Start

L'application est **entièrement interactive** ! Voici comment tester les fonctionnalités:

---

## 🔐 1. LOGIN - Page de Connexion

### Accédez à la page de login
- URL: `http://localhost:5175`
- Vous verrez une page d'authentification

### Testez avec ces emails de démo:
```
Email: admin@example.com
Mot de passe: (n'importe quoi, ex: password)

Email: chef@example.com
Email: bailleur@example.com
Email: animateur@example.com
```

### Fonctionnalités à tester:
- ✅ Cliquez l'icône "œil" pour afficher/masquer le mot de passe
- ✅ Entrez un email invalide → voir le message d'erreur
- ✅ Laissez un champ vide → validation requise
- ✅ Le rôle s'adapte selon l'email choisi

---

## 📊 2. DASHBOARD - Page d'accueil

Après connexion, vous verrez:
- Statistiques avec 4 cartes
- Graphiques de campagnes
- Distribution bénéficiaires

### Fonctionnalités:
- ✅ Les chiffres montent dynamiquement (animation CSS)
- ✅ Cliquez sur chaque lien dans la barre latérale pour naviguer
- ✅ Cliquez le menu hamburger (mobile) pour ouvrir/fermer le menu

---

## 📁 3. PROJETS - Gestion des Projets

### Testez la création:
1. Cliquez le bouton **"+ Nouveau projet"** (orange)
2. Remplissez le formulaire:
   - Titre (requis)
   - Bailleur (requis)
   - Budget (requis)
   - Statut
   - Description
3. Cliquez **"Créer"**
4. ✅ **Toast de succès** apparaît en haut à droite
5. ✅ Le nouveau projet s'ajoute à la liste

### Testez la recherche/filtrage:
1. Dans la barre de recherche en haut de la table, tapez "REPREHREC"
2. ✅ La liste se filtre en temps réel
3. Videz la recherche → la liste revient

### Testez le tri:
1. Cliquez sur l'en-tête de colonne **"Budget"**
2. ✅ Les projets se trient par budget (ascendant)
3. Cliquez à nouveau → tri descendant
4. Les flèches ⬆️⬇️ montrent l'ordre actif

### Testez la pagination:
1. Cliquez le bouton **"Suivant"** en bas
2. ✅ Les pages naviguent (1/1 pour démo, mais structure prête)

### Testez l'édition:
1. Cliquez l'icône **✏️ (éditer)** sur une ligne
2. Un modal s'ouvre avec le titre "Éditer le projet"
3. Modifiez les champs
4. Cliquez **"Mettre à jour"**
5. ✅ **Toast "Projet mis à jour"** → Changements visibles

### Testez la suppression:
1. Cliquez l'icône **🗑️ (supprimer)** sur une ligne
2. Un dialog de confirmation apparaît
3. Cliquez **"Supprimer"** (bouton rouge)
4. ✅ **Toast "Projet supprimé"** → Ligne disparaît

### Validation du formulaire:
1. Ouvrez le modal de création
2. Laissez un champ requis vide
3. Cliquez "Créer"
4. ✅ **Toast d'avertissement** : "Veuillez remplir tous les champs requis"

---

## 🎯 4. CAMPAGNES - Gestion des Campagnes

Même fonctionnalités que les Projets:

### Actions complètes:
- ✅ Créer une campagne
- ✅ Éditer une campagne
- ✅ Supprimer une campagne
- ✅ Rechercher par titre ou région
- ✅ Trier par colonne
- ✅ Pagination

### Spécificités:
- Sélection de région (Littoral, Centre, Est, Ouest, Nord)
- Dates de début/fin
- Cible de participants

---

## 👥 5. UTILISATEURS - Gestion des Utilisateurs

### ⚠️ Note: Uniquement accessible par Admin

Si vous êtes connecté en tant qu'Admin (admin@example.com):

### Créer un utilisateur:
1. Cliquez **"+ Ajouter un utilisateur"**
2. Remplissez:
   - Nom complet (requis)
   - Email valide (requis)
   - Rôle: Animateur, Chef, Financier, Admin, Bailleur
   - Statut: Actif ou Inactif
3. Cliquez **"Créer"**
4. ✅ Nouvel utilisateur dans la liste

### Éditer un utilisateur:
1. Cliquez l'icône **✏️** sur une ligne
2. Modifiez les champs
3. Cliquez **"Mettre à jour"**
4. ✅ Changements appliqués

### Supprimer un utilisateur:
1. Cliquez l'icône **🗑️** sur une ligne
2. Dialog de confirmation
3. Cliquez **"Supprimer"**
4. ✅ Utilisateur supprimé

### Validation Email:
- Entrez un email invalide → message d'erreur
- Format: nom@domaine.fr

---

## 🔔 6. NOTIFICATIONS (Toast System)

### Succès ✅ (Vert)
Apparaît après:
- Créer un projet/campagne/utilisateur
- Éditer un élément
- Supprimer un élément

### Erreur ❌ (Rouge)
Apparaît si:
- Une erreur lors d'une action
- Erreur serveur (si backend intégré)

### Avertissement ⚠️ (Orange)
Aparaît si:
- Champs manquants
- Données invalides
- Validation échouée

### Info ℹ️ (Bleu)
Autre information générale

### Fermeture:
- Auto-fermeture après 3 secondes
- Cliquez l'X pour fermer manuellement
- Multiple toasts = stack en haut à droite

---

## 👤 7. MENU UTILISATEUR (Navbar)

### Cliquez sur votre avatar (cercle en haut à droite)
- Affiche le rôle actuel
- Dropdown menu avec:
  - Mon profil
  - Paramètres
  - **Déconnexion** (rouge)

### Déconnexion:
1. Cliquez **"Déconnexion"**
2. ✅ Revient à la page de login
3. Pouvez vous reconnecter avec un autre rôle

---

## 🎨 8. CONTRÔLE D'ACCÈS PAR RÔLE

### Admin (admin@example.com)
- ✅ Accès à tous les modules
- ✅ Peut créer/éditer/supprimer projets, campagnes
- ✅ Accès "Gestion des utilisateurs"
- ✅ Tous les boutons d'action visibles

### Chef de Projet (chef@example.com)
- ✅ Accès aux projets et campagnes
- ✅ Peut créer/éditer/supprimer
- ❌ Pas d'accès "Gestion des utilisateurs"
- ✅ Bouton "Nouveau projet" visible

### Bailleur (bailleur@example.com)
- ✅ Peut voir les projets/campagnes (lecture)
- ❌ Boutons "Nouveau projet" invisibles
- ❌ Pas d'icônes éditer/supprimer
- ❌ Pas d'accès "Gestion des utilisateurs"

### Animateur (animateur@example.com)
- ✅ Accès limité aux modules
- ✅ Peut créer/éditer campagnes
- ❌ Accès réduit aux autres sections

---

## 🔄 9. FLUX UTILISATEUR COMPLET (À Tester)

1. **Login** → admin@example.com
2. **Dashboard** → Voir les stats
3. **Projets** → Créer un nouveau projet
4. **Campagnes** → Créer une campagne
5. **Utilisateurs** → Ajouter un utilisateur
6. **Toast notifications** → Voir les messages
7. **Recherche & Tri** → Filtrer les listes
8. **Menu utilisateur** → Déconnexion
9. **Reconnectez-vous** → Chef de projet
10. **Vérifiez** → Les boutons changent selon le rôle

---

## 📱 10. RESPONSIVE (Mobile)

### Sur un écran petit:
1. La barre latérale disparaît
2. Un menu hamburger ☰ apparaît en haut à gauche
3. Cliquez le hamburger → la barre s'ouvre
4. Cliquez un lien → la barre se ferme
5. Les tableaux défilent horizontalement

---

## 🐛 11. DÉPANNAGE

### Le modal ne s'ouvre pas?
- Vérifiez la console (F12 → Console)
- Rechargez la page (Ctrl+R)

### Les toasts ne s'affichent pas?
- Vérifiez que App.jsx importe ToastProvider
- Rechargez la page

### Les changements ne se sauvegardent pas?
- ✅ C'est normal ! Les données sont en mémoire (no persistence)
- Pour une vraie persistance, intégrez un backend

### Le tri ne fonctionne pas?
- Cliquez sur le nom de la colonne
- Les flèches doivent montrer l'ordre

### Les emails de démo ne marchent pas?
- N'importe quel email valide fonctionne
- Format: something@domain.com

---

## ✅ Checklist de Test Complet

- [ ] Login avec email valide
- [ ] Login avec email invalide (validation)
- [ ] Voir le Dashboard
- [ ] Créer un projet
- [ ] Éditer un projet
- [ ] Supprimer un projet (avec confirmation)
- [ ] Rechercher les projets
- [ ] Trier les projets
- [ ] Paginer les projets
- [ ] Toast de succès visible
- [ ] Créer une campagne
- [ ] Créer un utilisateur (Admin)
- [ ] Menu utilisateur s'ouvre
- [ ] Déconnexion fonctionne
- [ ] Reconnecter avec un autre rôle
- [ ] Vérifier le contrôle d'accès
- [ ] Tester sur mobile (F12)

---

## 📞 Support

Si vous trouvez des bugs:
1. Ouvrez la console (F12)
2. Notez l'erreur exacte
3. Vérifiez le réseau (onglet Network)
4. Signalez l'erreur avec les étapes pour la reproduire

---

**Bon test ! 🎉**
