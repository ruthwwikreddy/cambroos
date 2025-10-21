# 🚀 Vercel Deployment Guide

## Overview

Your app is now configured to deploy both frontend and backend on Vercel using **Serverless Functions**.

---

## 📁 Project Structure

```
cambroos-main/
├── api/
│   └── send-order.js          ← Serverless function (backend)
├── src/
│   ├── pages/
│   │   └── CartPage.tsx       ← Frontend (auto-detects environment)
│   └── services/
│       └── emailService.js    ← Email service
├── vercel.json                ← Vercel configuration
└── .env                       ← Environment variables (DO NOT COMMIT)
```

---

## 🔧 Step-by-Step Deployment

### 1. Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 2. Prepare Environment Variables

You need to add these environment variables in Vercel dashboard:

```
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=akkenapally.reddy@gmail.com
SENDER_PASSWORD=zfmeuobywsxascyg
ADMIN_EMAIL=akkenapally.reddy@gmail.com
```

### 3. Deploy via Vercel Dashboard (Easiest Method)

#### A. Push to GitHub/GitLab/Bitbucket

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with email service"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/cambroos.git

# Push
git push -u origin main
```

#### B. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project

#### C. Configure Environment Variables

1. In your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add each variable:
   - `SMTP_SERVER` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SENDER_EMAIL` = `akkenapally.reddy@gmail.com`
   - `SENDER_PASSWORD` = `zfmeuobywsxascyg`
   - `ADMIN_EMAIL` = `akkenapally.reddy@gmail.com`

4. Click **"Save"**

#### D. Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. Your app will be live at `https://your-project.vercel.app`

---

### 4. Deploy via Vercel CLI (Alternative)

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? cambroos
# - Directory? ./
# - Override settings? N

# Add environment variables
vercel env add SMTP_SERVER
vercel env add SMTP_PORT
vercel env add SENDER_EMAIL
vercel env add SENDER_PASSWORD
vercel env add ADMIN_EMAIL

# Deploy to production
vercel --prod
```

---

## 🔍 How It Works

### Development (Local)
- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3001/api/send-order`
- CartPage uses `http://localhost:3001/api/send-order`

### Production (Vercel)
- Frontend: `https://your-project.vercel.app`
- Backend: `https://your-project.vercel.app/api/send-order`
- CartPage automatically uses `/api/send-order` (relative path)

### Auto-Detection in CartPage
```javascript
const apiUrl = import.meta.env.PROD 
  ? '/api/send-order'              // Production (Vercel)
  : 'http://localhost:3001/api/send-order';  // Development
```

---

## 📦 What Gets Deployed

### Frontend Build
- Vite builds your React app to `dist/`
- Static files served from Vercel CDN
- Fast global delivery

### Backend (Serverless Function)
- `api/send-order.js` becomes a serverless function
- Runs on-demand when called
- No server to manage
- Auto-scales

---

## ✅ Verification

After deployment:

1. **Visit your site:** `https://your-project.vercel.app`
2. **Add items to cart**
3. **Fill out the quote form**
4. **Submit**
5. **Check emails:**
   - Admin: `akkenapally.reddy@gmail.com`
   - Customer: Their email address

---

## 🔒 Security Notes

### DO NOT commit `.env` file!

Make sure `.gitignore` includes:
```
.env
.env.local
.env.production
```

### Gmail App Password

- Use an **App-Specific Password**, not your regular Gmail password
- Generate one at: https://myaccount.google.com/apppasswords
- Enable 2-Factor Authentication first

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `Cannot find module`
```bash
# Reinstall dependencies
npm install
```

### Emails Not Sending

1. Check Vercel logs: `vercel logs`
2. Verify environment variables are set
3. Test Gmail credentials locally first

### API Not Working

1. Check function logs in Vercel dashboard
2. Verify `api/send-order.js` exists
3. Check `vercel.json` configuration

---

## 📊 Vercel Dashboard

After deployment, you can:
- View deployment logs
- Monitor function invocations
- Check email sending success/failures
- Update environment variables
- Roll back to previous deployments

---

## 🎯 Production Checklist

- [ ] Environment variables added in Vercel
- [ ] `.env` file in `.gitignore`
- [ ] Test email sending locally
- [ ] Push code to Git repository
- [ ] Deploy to Vercel
- [ ] Test on production URL
- [ ] Verify both emails arrive
- [ ] Check Vercel function logs

---

## 💡 Tips

1. **Custom Domain:** Add your own domain in Vercel settings
2. **Analytics:** Enable Vercel Analytics for insights
3. **Monitoring:** Check function logs regularly
4. **Updates:** Push to Git → Auto-deploys to Vercel

---

## 🚀 Quick Deploy Commands

```bash
# One-time setup
git init
git add .
git commit -m "Deploy to Vercel"
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then in Vercel dashboard:
# 1. Import repository
# 2. Add environment variables
# 3. Deploy

# Future updates:
git add .
git commit -m "Update"
git push
# Vercel auto-deploys!
```

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Test locally first: `npm run dev:all`
3. Verify environment variables
4. Check function logs in Vercel dashboard

---

Your app is ready for Vercel deployment! 🎉
