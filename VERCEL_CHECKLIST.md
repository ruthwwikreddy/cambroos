# ✅ Vercel Deployment Checklist

## Pre-Deployment Checklist

### ✅ Code Ready
- [x] Frontend code complete
- [x] Backend API created (`api/send-order.js`)
- [x] Email service configured
- [x] Environment detection added
- [x] Dependencies correct (`nodemailer` in dependencies)
- [x] `.env` in `.gitignore`

### ✅ Files in Place
- [x] `api/send-order.js` - Serverless function
- [x] `src/services/emailService.js` - Email service
- [x] `vercel.json` - Vercel configuration
- [x] `.env.example` - Environment template
- [x] `.gitignore` - Includes `.env`

---

## Deployment Steps

### Step 1: Test Locally ✅
```bash
# Test email service
node test-email-service.js

# Test full app
npm run dev:all
```
- [ ] Email service works
- [ ] Both emails received
- [ ] Form submission works
- [ ] Cart functionality works

### Step 2: Prepare Git Repository
```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
```
- [ ] Git initialized
- [ ] All files committed
- [ ] `.env` NOT committed (check with `git status`)

### Step 3: Push to GitHub
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```
- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] Verify on GitHub web interface

### Step 4: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

- [ ] Project imported
- [ ] Build successful
- [ ] Site is live

### Step 5: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

- [ ] `SMTP_SERVER` = `smtp.gmail.com`
- [ ] `SMTP_PORT` = `465`
- [ ] `SENDER_EMAIL` = `akkenapally.reddy@gmail.com`
- [ ] `SENDER_PASSWORD` = `zfmeuobywsxascyg`
- [ ] `ADMIN_EMAIL` = `akkenapally.reddy@gmail.com`

### Step 6: Redeploy
- [ ] Go to Deployments tab
- [ ] Click "..." on latest deployment
- [ ] Click "Redeploy"
- [ ] Wait for completion

### Step 7: Test Production
- [ ] Visit your live site
- [ ] Add items to cart
- [ ] Fill out quote form
- [ ] Submit form
- [ ] Check admin email
- [ ] Check customer email

---

## Post-Deployment Checklist

### Verify Everything Works
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Cart functionality works
- [ ] Form validation works
- [ ] API endpoint responds
- [ ] Admin email received
- [ ] Customer email received
- [ ] Email formatting correct
- [ ] Mobile responsive

### Monitor & Maintain
- [ ] Check Vercel function logs
- [ ] Monitor email delivery
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics (optional)

---

## Environment Variables Reference

| Variable | Value | Purpose |
|----------|-------|---------|
| `SMTP_SERVER` | `smtp.gmail.com` | Gmail SMTP server |
| `SMTP_PORT` | `465` | Secure SMTP port |
| `SENDER_EMAIL` | Your Gmail | Email sender address |
| `SENDER_PASSWORD` | App password | Gmail app-specific password |
| `ADMIN_EMAIL` | Your email | Receives quotation requests |

---

## Troubleshooting

### Build Fails
- [ ] Check Vercel build logs
- [ ] Verify `package.json` is correct
- [ ] Ensure all dependencies installed
- [ ] Check for syntax errors

### API Not Working
- [ ] Verify environment variables set
- [ ] Check function logs in Vercel
- [ ] Test API endpoint directly
- [ ] Verify `api/send-order.js` exists

### Emails Not Sending
- [ ] Check environment variables
- [ ] Verify Gmail app password
- [ ] Check function logs for errors
- [ ] Test locally first
- [ ] Verify SMTP settings

### Form Submission Fails
- [ ] Check browser console for errors
- [ ] Verify API endpoint URL
- [ ] Check network tab in DevTools
- [ ] Verify CORS settings

---

## Quick Commands

```bash
# Local testing
npm run dev:all

# Test email service
node test-email-service.js

# Deploy (after pushing to Git)
# Just push to GitHub, Vercel auto-deploys!
git push

# View logs
vercel logs
```

---

## Success Criteria

Your deployment is successful when:

✅ Website is live and accessible  
✅ Cart system works  
✅ Form validation works  
✅ Form submission succeeds  
✅ Admin receives quotation email  
✅ Customer receives confirmation email  
✅ Emails are properly formatted  
✅ No errors in Vercel logs  

---

## 🎉 You're Done!

Once all checkboxes are checked, your Cambroos app is successfully deployed on Vercel with full email functionality!

**Your Live URLs:**
- Website: `https://your-project.vercel.app`
- API: `https://your-project.vercel.app/api/send-order`

**Next Steps:**
- Share your site!
- Monitor function logs
- Consider adding a custom domain
- Enable analytics

---

## Need Help?

- **Documentation:** See `DEPLOY_TO_VERCEL.md`
- **Detailed Guide:** See `VERCEL_DEPLOYMENT_GUIDE.md`
- **Vercel Docs:** https://vercel.com/docs
- **Function Logs:** Vercel Dashboard → Functions tab
