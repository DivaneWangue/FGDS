# 🚀 Guide de déploiement sur Vercel

## Pré-requis

- Compte Vercel (https://vercel.com)
- Git et votre projet pushé sur GitHub

## Étapes de déploiement

### 1. Préparer le projet

✅ Le projet FGDS est configuré pour Vercel :
- `vercel.json` - Configuration Vercel
- `package.json` - Scripts de build mis à jour
- `.vercelignore` - Fichiers à ignorer
- `vite.config.js` - Configuration Vite

### 2. Pousser sur GitHub

```bash
git add .
git commit -m "Configure Vercel deployment"
git push origin main
```

### 3. Connecter à Vercel

Option A: Via le dashboard Vercel
1. Allez sur https://vercel.com
2. Cliquez "New Project"
3. Sélectionnez votre repository GitHub
4. Configurez les settings (voir ci-dessous)
5. Cliquez "Deploy"

Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### 4. Configuration de Vercel

**Build Settings:**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**Environment Variables (optionnel):**
```
VITE_API_URL = https://api.votre-backend.com/api
```

## Structure correcte

```
FGDS/
├── package.json          ✅ À la racine
├── vite.config.js        ✅ Configuration Vite
├── vercel.json          ✅ Configuration Vercel
├── .vercelignore        ✅ Fichiers à ignorer
├── src/                 ✅ Code source
├── public/              ✅ Fichiers statiques
├── index.html           ✅ HTML racine
└── dist/                ⚠️ Généré au build
```

## Dépannage

### Erreur: "Cannot find package.json"

**Solution:** 
- Assurez-vous que `package.json` est à la racine (✅ OK)
- Vérifiez que le fichier n'est pas dans `.gitignore` (✅ OK)
- Vérifiez le chemin du projet dans les settings Vercel

### Erreur: "Build failed"

**Solutions:**
1. Vérifiez les logs Vercel pour plus de détails
2. Testez localement: `npm run build`
3. Assurez-vous que toutes les dépendances sont dans `package.json`
4. Vérifiez que `vite.config.js` est correct

### Erreur: "Module not found"

**Solutions:**
1. Vérifiez les imports dans le code
2. Testez: `npm install && npm run build`
3. Vérifiez que tous les fichiers sont dans le repo Git

## Après le déploiement

1. ✅ Testez l'URL fournie par Vercel
2. ✅ Vérifiez la performance sur https://pagespeed.web.dev
3. ✅ Configurez le domaine personnalisé (optionnel)
4. ✅ Activez le HTTPS (automatique sur Vercel)

## Domaine personnalisé

1. Dans Vercel Dashboard → Project Settings
2. Allez à "Domains"
3. Ajoutez votre domaine
4. Mettez à jour les DNS records chez votre registraire

## Variables d'environnement

Pour ajouter des variables d'environnement :

1. Vercel Dashboard → Settings → Environment Variables
2. Ajoutez vos variables :
   - `VITE_API_URL` = votre URL API
   - `VITE_ENABLE_ANALYTICS` = true/false
3. Redéployez

## Mise à jour automatique

Les déploiements se mettent à jour automatiquement quand vous pushez sur GitHub !

```bash
git push origin main  # Déclenche automatiquement un déploiement Vercel
```

## Performance

Pour optimiser la performance sur Vercel :

1. **Lazy Loading:**
```javascript
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
```

2. **Code Splitting:**
- Vite le fait automatiquement

3. **Compression:**
- Vercel compresse automatiquement

4. **Caching:**
- Configurez dans `vercel.json` si besoin

## Support

- Documentation Vercel: https://vercel.com/docs
- Documentation Vite: https://vitejs.dev
- Issues: Vérifiez les logs Vercel pour le débogage

---

**Notes:**
- Vercel détecte automatiquement Vite
- Pas besoin de serveur personnalisé
- Le déploiement est entièrement géré par Vercel
- Les builds sont mis en cache pour accélérer les déploiements
