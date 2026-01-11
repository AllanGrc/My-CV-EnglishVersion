#!/bin/bash
# ============================================
# DEPLOY SCRIPT FOR GITHUB PAGES
# ============================================

echo "🚀 Building for GitHub Pages..."
ng build --configuration production --base-href="/My-CV-EnglishVersion/"

echo "📦 Installing gh-pages if needed..."
npm install -g angular-cli-ghpages

echo "🌐 Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/mi-cv-webapp/browser

echo "✅ Deployment completed!"
echo "🔗 Your site will be available at:"
echo "   https://allangrc.github.io/My-CV-EnglishVersion/"
echo ""
echo "📝 Note: It may take 1-2 minutes to propagate."
