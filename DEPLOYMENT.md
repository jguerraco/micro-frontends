# Deployment & Build Guide

This guide explains the build and deployment processes for the micro-frontend monorepo, helping developers understand when and what to rebuild for efficient production deployments.

## 📋 Table of Contents

- [Build Strategies](#build-strategies)
- [Development vs Production](#development-vs-production)
- [Dependency Chain](#dependency-chain)
- [Build Commands](#build-commands)
- [Production Workflows](#production-workflows)
- [CI/CD Pipeline Examples](#cicd-pipeline-examples)
- [Common Scenarios](#common-scenarios)
- [Best Practices](#best-practices)

## 🔄 Build Strategies

### **Strategy 1: Selective Rebuilding (Recommended)**

Rebuild only the packages that have changed and their dependents. This is faster and more efficient for production deployments.

**Advantages:**
- ⚡ Faster build times
- 💰 Lower CI/CD costs
- 🎯 Targeted deployments
- 📦 Smaller deployment artifacts

**When to use:** Production environments, frequent deployments, large teams

### **Strategy 2: Full Rebuild (Simpler)**

Rebuild everything regardless of what changed. This is safer but less efficient.

**Advantages:**
- 🛡️ Guaranteed consistency
- 🧠 No need to track dependencies
- 🚀 Simple deployment scripts
- ❌ No risk of missing dependencies

**When to use:** Small teams, infrequent deployments, when unsure about changes

## 🏗️ Development vs Production

### **During Development**
```bash
npm run dev  # Starts host with hot reload
```

**What happens:**
- ✅ Hot module replacement (HMR) enabled
- ✅ Changes reflected instantly in browser
- ✅ No manual rebuilding required
- ✅ All packages watched simultaneously

### **For Production Deployment**
```bash
# Option A: Selective (efficient)
npm run build:app1  # Only changed apps

# Option B: Full (safe)
npm run build       # Everything
```

**What happens:**
- 📦 Optimized production bundles created
- 🗜️ Code minification and tree-shaking
- 📝 TypeScript type checking
- 🏗️ Library exports for micro-frontends

## 📊 Dependency Chain

Understanding the dependency relationships is crucial for efficient builds:

```
┌─────────────────────────────────────────┐
│                  host                   │ ← Main application
│  ├─ app1 (Counter)                     │
│  ├─ app2 (Todo)                        │
│  ├─ app3 (Content Hub)                 │
│  └─ shared-ui (Auth + Components)      │
└─────────────────────────────────────────┘
           ↑
    ┌─────────────┐
    │   shared-ui │ ← Foundation library
    │  ├─ Button  │
    │  ├─ Card    │
    │  └─ Auth    │
    └─────────────┘
```

### **Rebuild Rules:**

1. **Changed shared-ui** → Rebuild everything
2. **Changed app1/app2/app3** → Rebuild that app + host
3. **Changed host** → Rebuild host only
4. **Changed root configs** → Rebuild everything

## 🚀 Build Commands

### **Individual Package Builds**
```bash
npm run build:shared   # Shared UI library
npm run build:app1     # Counter micro-frontend
npm run build:app2     # Todo micro-frontend (admin)
npm run build:app3     # Content Hub micro-frontend
npm run build:host     # Main shell application
```

### **Bulk Build Commands**
```bash
npm run build          # Build all packages
npm run dev:all        # Run all in development
```

### **Development Commands**
```bash
npm run dev            # Host only (recommended)
npm run dev:app1       # Counter standalone
npm run dev:app2       # Todo standalone
npm run dev:app3       # Content Hub standalone
```

## 📋 Production Workflows

### **Workflow 1: Change Detection (Recommended)**

```bash
#!/bin/bash
# Detect what changed since last deployment
changed_files=$(git diff --name-only HEAD~1)

# Rebuild based on changes
if [[ $changed_files == *"packages/shared-ui"* ]]; then
    echo "📦 Shared library changed - full rebuild required"
    npm run build
elif [[ $changed_files == *"packages/app1"* ]]; then
    echo "🔄 App1 changed - selective rebuild"
    npm run build:app1
    npm run build:host
elif [[ $changed_files == *"packages/app2"* ]]; then
    echo "🔄 App2 changed - selective rebuild"
    npm run build:app2
    npm run build:host
elif [[ $changed_files == *"packages/app3"* ]]; then
    echo "🔄 App3 changed - selective rebuild"
    npm run build:app3
    npm run build:host
elif [[ $changed_files == *"packages/host"* ]]; then
    echo "🏠 Host changed - host rebuild only"
    npm run build:host
else
    echo "📄 No package changes detected"
fi
```

### **Workflow 2: Full Rebuild (Simple)**

```bash
#!/bin/bash
# Always rebuild everything for maximum safety
npm run build
echo "✅ Full rebuild completed"
```

### **Workflow 3: Manual Selection**

```bash
#!/bin/bash
# Let developers specify what to rebuild
read -p "What changed? (shared/app1/app2/app3/host/all): " choice

case $choice in
    shared)
        npm run build:shared
        npm run build  # Everything depends on shared
        ;;
    app1)
        npm run build:app1
        npm run build:host
        ;;
    app2)
        npm run build:app2
        npm run build:host
        ;;
    app3)
        npm run build:app3
        npm run build:host
        ;;
    host)
        npm run build:host
        ;;
    all)
        npm run build
        ;;
esac
```

## 🤖 CI/CD Pipeline Examples

### **GitHub Actions Example**

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  detect-changes:
    runs-on: ubuntu-latest
    outputs:
      shared: ${{ steps.changes.outputs.shared }}
      app1: ${{ steps.changes.outputs.app1 }}
      app2: ${{ steps.changes.outputs.app2 }}
      app3: ${{ steps.changes.outputs.app3 }}
      host: ${{ steps.changes.outputs.host }}
    steps:
      - uses: actions/checkout@v3
      - uses: dorny/paths-filter@v2
        id: changes
        with:
          filters: |
            shared:
              - 'packages/shared-ui/**'
            app1:
              - 'packages/app1/**'
            app2:
              - 'packages/app2/**'
            app3:
              - 'packages/app3/**'
            host:
              - 'packages/host/**'

  build:
    needs: detect-changes
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build shared library (if changed)
        if: needs.detect-changes.outputs.shared == 'true'
        run: npm run build:shared
      
      - name: Build apps (selective)
        run: |
          if [ "${{ needs.detect-changes.outputs.shared }}" == "true" ]; then
            npm run build
          else
            [ "${{ needs.detect-changes.outputs.app1 }}" == "true" ] && npm run build:app1
            [ "${{ needs.detect-changes.outputs.app2 }}" == "true" ] && npm run build:app2
            [ "${{ needs.detect-changes.outputs.app3 }}" == "true" ] && npm run build:app3
            npm run build:host
          fi
      
      - name: Deploy
        run: |
          # Deploy packages/host/dist to your hosting platform
          echo "Deploying to production..."
```

### **Jenkins Pipeline Example**

```groovy
pipeline {
    agent any
    
    stages {
        stage('Detect Changes') {
            steps {
                script {
                    def changes = sh(
                        script: 'git diff --name-only HEAD~1',
                        returnStdout: true
                    ).trim()
                    
                    env.SHARED_CHANGED = changes.contains('packages/shared-ui')
                    env.APP1_CHANGED = changes.contains('packages/app1')
                    env.APP2_CHANGED = changes.contains('packages/app2')
                    env.APP3_CHANGED = changes.contains('packages/app3')
                    env.HOST_CHANGED = changes.contains('packages/host')
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                
                script {
                    if (env.SHARED_CHANGED == 'true') {
                        sh 'npm run build'
                    } else {
                        if (env.APP1_CHANGED == 'true') sh 'npm run build:app1'
                        if (env.APP2_CHANGED == 'true') sh 'npm run build:app2'
                        if (env.APP3_CHANGED == 'true') sh 'npm run build:app3'
                        sh 'npm run build:host'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy packages/host/dist
                sh 'echo "Deploying to production..."'
            }
        }
    }
}
```

## 💡 Common Scenarios

### **Scenario 1: Bug Fix in Counter App**
```bash
# What changed: packages/app1/src/App.tsx
# What to rebuild:
npm run build:app1  # Build the changed app
npm run build:host  # Host imports app1

# Result: 2 builds instead of 6 packages
```

### **Scenario 2: New Shared Component**
```bash
# What changed: packages/shared-ui/src/NewComponent.tsx
# What to rebuild:
npm run build       # Everything depends on shared-ui

# Result: Full rebuild required (unavoidable)
```

### **Scenario 3: API Integration Update**
```bash
# What changed: packages/app3/src/api.ts
# What to rebuild:
npm run build:app3  # Build the changed app
npm run build:host  # Host imports app3

# Result: 2 builds instead of 6 packages
```

### **Scenario 4: Navigation Changes**
```bash
# What changed: packages/host/src/Navigation.tsx
# What to rebuild:
npm run build:host  # Only host changed

# Result: 1 build instead of 6 packages
```

### **Scenario 5: Authentication Update**
```bash
# What changed: packages/shared-ui/src/AuthContext.tsx
# What to rebuild:
npm run build       # All apps use authentication

# Result: Full rebuild required (affects everything)
```

## 📈 Best Practices

### **For Development Teams**

1. **Use Selective Builds**
   - Faster feedback loops
   - Reduced CI/CD costs
   - Better resource utilization

2. **Implement Change Detection**
   - Automated dependency tracking
   - Git-based change detection
   - Smart rebuild decisions

3. **Monitor Build Times**
   ```bash
   time npm run build:app1  # ~30 seconds
   time npm run build       # ~2-3 minutes
   ```

4. **Cache Build Artifacts**
   - Use `npm ci` for faster installs
   - Cache `node_modules` between builds
   - Cache TypeScript compilation

### **For Production Deployments**

1. **Always Deploy Host Package**
   ```bash
   # The host/dist folder contains everything
   rsync -av packages/host/dist/ production:/var/www/
   ```

2. **Test Builds Locally**
   ```bash
   npm run build:host
   cd packages/host
   npm run preview  # Test production build
   ```

3. **Version Your Deployments**
   ```bash
   # Tag successful builds
   git tag "v$(date +%Y%m%d)-$(git rev-parse --short HEAD)"
   ```

4. **Rollback Strategy**
   ```bash
   # Keep previous build artifacts
   mv dist dist-backup-$(date +%Y%m%d)
   ```

### **Performance Optimizations**

1. **Parallel Builds** (when dependencies allow):
   ```bash
   npm run build:app1 & npm run build:app2 & npm run build:app3 & wait
   npm run build:host
   ```

2. **Incremental TypeScript**:
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "incremental": true,
       "tsBuildInfoFile": ".tsbuildinfo"
     }
   }
   ```

3. **Vite Build Caching**:
   ```js
   // vite.config.ts
   export default {
     build: {
       rollupOptions: {
         cache: true
       }
     }
   }
   ```

## 🔍 Troubleshooting

### **Build Failures**

**Problem:** `Cannot find module 'app1'`
**Solution:** Ensure you built the dependency first
```bash
npm run build:app1
npm run build:host
```

**Problem:** TypeScript errors in production
**Solution:** Run type checking before builds
```bash
npm run type-check  # Add this script to package.json
```

**Problem:** Outdated dependencies
**Solution:** Rebuild shared library first
```bash
npm run build:shared
npm run build
```

### **Performance Issues**

**Problem:** Slow builds
**Solution:** Use selective rebuilding
```bash
# Instead of
npm run build

# Use
npm run build:app1 && npm run build:host
```

**Problem:** Large bundle sizes
**Solution:** Check what's included in builds
```bash
# Analyze bundle
npm run build:host
npx vite-bundle-analyzer packages/host/dist
```

## 📚 Additional Resources

- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Micro-Frontends Best Practices](https://micro-frontends.org/)

---

**💡 Remember:** When in doubt, use the full rebuild (`npm run build`). It's better to be safe and slower than fast and broken!