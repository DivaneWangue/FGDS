#!/bin/bash

# 🚀 FGDS - Vercel Deployment Check List

echo "════════════════════════════════════════════════════════════════════"
echo "   ✅ FGDS - Configuration Vercel Complétée!"
echo "════════════════════════════════════════════════════════════════════"
echo ""

echo "📋 FICHIERS CONFIGURÉS:"
echo "  ✅ vercel.json           - Configuration Vercel"
echo "  ✅ .vercelignore         - Fichiers à ignorer"
echo "  ✅ .env.example          - Variables d'environnement"
echo "  ✅ package.json          - Scripts mis à jour"
echo "  ✅ vite.config.js        - Configuration Vite"
echo "  ✅ dist/                 - Build généré ✓"
echo ""

echo "🚀 ÉTAPES DE DÉPLOIEMENT:"
echo ""

echo "1️⃣  POUSSER SUR GITHUB"
echo "    git add ."
echo "    git commit -m 'Configure Vercel deployment'"
echo "    git push origin main"
echo ""

echo "2️⃣  ALLER SUR VERCEL"
echo "    1. https://vercel.com"
echo "    2. Cliquez 'New Project'"
echo "    3. Sélectionnez 'FGDS' depuis GitHub"
echo "    4. Configuration:"
echo "       • Framework: Vite ✓ (auto-détecté)"
echo "       • Build Command: npm run build ✓"
echo "       • Output: dist ✓"
echo "    5. Cliquez 'Deploy'"
echo ""

echo "3️⃣  ATTENDEZ LA COMPILATION"
echo "    • Vercel va télécharger le repo"
echo "    • Installer les dépendances"
echo "    • Compiler avec npm run build"
echo "    • Déployer sur la CDN mondiale"
echo ""

echo "════════════════════════════════════════════════════════════════════"
echo ""

echo "✨ APRÈS LE DÉPLOIEMENT:"
echo ""
echo "  URL: https://fgds.vercel.app (ou votre domaine personnalisé)"
echo "  Logs: Visibles dans le dashboard Vercel"
echo "  Redéploiement: Automatique quand vous pushez sur main"
echo ""

echo "════════════════════════════════════════════════════════════════════"
echo ""

echo "📞 EN CAS DE PROBLÈME:"
echo ""
echo "❌ Erreur: 'Cannot find package.json'"
echo "   ✅ Vérifiez: package.json est à la racine du repo"
echo "   ✅ Vérifiez: le repo est correctement pushé sur GitHub"
echo "   ✅ Vérifiez: le repo n'a pas de .gitignore masquant package.json"
echo ""

echo "❌ Erreur: 'Build failed'"
echo "   ✅ Vérifiez les logs Vercel pour les détails"
echo "   ✅ Testez localement: npm run build"
echo "   ✅ Vérifiez les imports dans le code"
echo ""

echo "❌ Erreur: 'Output directory not found'"
echo "   ✅ Vérifiez: outputDirectory = 'dist' dans vercel.json"
echo "   ✅ Vérifiez: 'dist' est généré après le build"
echo ""

echo "════════════════════════════════════════════════════════════════════"
echo ""

echo "📚 RESSOURCES:"
echo ""
echo "  • Vercel Docs: https://vercel.com/docs"
echo "  • Vite Guide: https://vitejs.dev"
echo "  • DEPLOYMENT_GUIDE.md (dans ce repo)"
echo "  • VERCEL_SETUP.md (dans ce repo)"
echo ""

echo "════════════════════════════════════════════════════════════════════"
echo ""

echo "✅ TOUT EST PRÊT! Allez déployer sur Vercel maintenant 🚀"
echo ""
