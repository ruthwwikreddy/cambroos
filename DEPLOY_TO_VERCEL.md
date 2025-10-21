# 🚀 Deploy to Vercel - Quick Guide

## ⚡ Fastest Method (5 Minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cambroos.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Click **"Add New Project"**
3. Click **"Import"** next to your GitHub repository
4. Vercel auto-detects settings ✅
5. Click **"Deploy"**

### Step 3: Add Environment Variables

After deployment, in your Vercel project:

1. Go to **Settings** → **Environment Variables**
2. Add these 5 variables:

| Variable | Value |
|----------|-------|
| `SMTP_SERVER` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SENDER_EMAIL` | `akkenapally.reddy@gmail.com` |
| `SENDER_PASSWORD` | `zfmeuobywsxascyg` |
| `ADMIN_EMAIL` | `akkenapally.reddy@gmail.com` |

3. Click **"Save"**
4. Go to **Deployments** → Click **"..."** → **"Redeploy"**

### Step 4: Test

1. Visit your live site: `https://your-project.vercel.app`
2. Add items to cart
3. Submit quote request
4. Check emails! 📧

---

## 🎯 That's It!

Your app is now live with:
- ✅ Frontend hosted on Vercel
- ✅ Backend API as serverless function
- ✅ Email service working
- ✅ Auto-deploys on every Git push

---

## 🔄 Future Updates

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push

# Vercel automatically redeploys! 🚀
```

---

## 📱 Your Live URLs

- **Website:** `https://your-project.vercel.app`
- **API Endpoint:** `https://your-project.vercel.app/api/send-order`

---

## ⚠️ Important Notes

1. **Never commit `.env` file** - It's in `.gitignore` ✅
2. **Add environment variables in Vercel dashboard** - Not in code
3. **Gmail App Password** - Use app-specific password, not regular password
4. **Test locally first** - Run `npm run dev:all` before deploying

---

## 🐛 If Something Goes Wrong

### Build Fails
- Check Vercel build logs
- Verify all dependencies in `package.json`

### Emails Not Sending
- Check environment variables are set correctly
- View function logs in Vercel dashboard
- Test locally first

### API Returns 500
- Check Vercel function logs
- Verify environment variables
- Make sure `api/send-order.js` exists

---

## 📊 Monitor Your App

In Vercel Dashboard:
- **Deployments** - See deployment history
- **Functions** - View API logs
- **Analytics** - Track visitors
- **Settings** - Update environment variables

---

## 🎉 You're Done!

Your Cambroos app is now live on Vercel with full email functionality!
