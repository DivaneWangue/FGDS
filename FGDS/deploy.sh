#!/bin/bash

# 🚀 FGDS - Deployment Quick Commands

echo "═══════════════════════════════════════════════════════════════════"
echo "  🚀 FGDS - Guide de déploiement sur Vercel"
echo "═══════════════════════════════════════════════════════════════════"
echo ""

echo "📋 PRÉREQUIS:"
echo "  • Compte Vercel (https://vercel.com)"
echo "  • Git configuré"
echo "  • Node.js 16+ installé"
echo ""

echo "🔧 COMMANDES UTILES:"
echo ""
echo "1️⃣  PRÉPARER LE PROJET:"
echo "    npm install"
echo "    npm run build"
echo ""

echo "2️⃣  TESTER LOCALEMENT LE BUILD:"
echo "    npm run build"
echo "    npm run preview"
echo "    # Ouvrir http://localhost:4173"
echo ""

echo "3️⃣  POUSSER SUR GITHUB:"
echo "    git add ."
echo "    git commit -m 'Prépare déploiement Vercel'"
echo "    git push origin main"
echo ""

echo "4️⃣  INSTALLER VERCEL CLI (optionnel):"
echo "    npm install -g vercel"
echo "    vercel"
echo ""

echo "5️⃣  DÉPLOYER VIA VERCEL DASHBOARD:"
echo "    1. Allez sur https://vercel.com"
echo "    2. Cliquez 'New Project'"
echo "    3. Sélectionnez le repo GitHub FGDS"
echo "    4. Configurez les settings"
echo "    5. Cliquez 'Deploy'"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ CONFIGURATION VERCEL OPTIMALE:"
echo ""
echo "Build Settings:"
echo "  • Framework: Vite"
echo "  • Build Command: npm run build"
echo "  • Output Directory: dist"
echo "  • Node Version: 18.x (par défaut)"
echo ""

echo "Environment Variables (optionnel):"
echo "  • VITE_API_URL=https://votre-api.com"
echo "  • VITE_ENABLE_ANALYTICS=false"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📂 FICHIERS DE CONFIGURATION CRÉÉS:"
echo "  ✓ vercel.json       - Configuration Vercel"
echo "  ✓ .vercelignore     - Fichiers à ignorer"
echo "  ✓ .env.example      - Variables d'environnement"
echo "  ✓ package.json      - Scripts mis à jour"
echo ""

echo "📚 DOCUMENTATION:"
echo "  • DEPLOYMENT_GUIDE.md - Guide complet de déploiement"
echo "  • https://vercel.com/docs"
echo ""

echo "═══════════════════════════════════════════════════════════════════"
echo ""
