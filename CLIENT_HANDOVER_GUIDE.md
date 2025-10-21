# 📦 Cambroos Email Service - Client Handover Guide

## 🎯 Overview

Your Cambroos website now has a fully functional email quotation system. When customers submit a quote request, two professional emails are automatically sent:

1. **To You (Admin):** Detailed quotation request with all customer information
2. **To Customer:** Professional confirmation email with order summary

---

## 🔧 What You Need to Set Up

### Gmail App Password Setup

To enable the email service, you need to provide your Gmail credentials using an **App Password** (not your regular Gmail password).

**📖 Full Instructions:** See `GMAIL_SETUP_GUIDE.md`

### Quick Summary:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Create app: "Cambroos Email Service"
   - Copy the 16-character password
3. **Add to Vercel:**
   - Go to your Vercel project settings
   - Add 5 environment variables (details below)
   - Redeploy

---

## 📝 Required Information

You need to provide these 5 values in your Vercel project:

| Variable | What It Is | Example |
|----------|------------|---------|
| `SMTP_SERVER` | Gmail SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | Secure SMTP port | `465` |
| `SENDER_EMAIL` | Your Gmail address | `your-email@gmail.com` |
| `SENDER_PASSWORD` | Your Gmail App Password | `abcdefghijklmnop` |
| `ADMIN_EMAIL` | Email to receive quotes | `your-email@gmail.com` |

---

## 🚀 Deployment Instructions

### Step 1: Get Your Gmail App Password

Follow the detailed guide in: **`GMAIL_SETUP_GUIDE.md`**

### Step 2: Add Environment Variables to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Open your **Cambroos** project
3. Click **Settings** → **Environment Variables**
4. Add each of the 5 variables listed above
5. Select **Production** for each
6. Click **Save**

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (1-2 minutes)

### Step 4: Test

1. Visit your live website
2. Add items to cart
3. Fill out the quote form
4. Submit
5. Check your Gmail inbox for both emails

---

## 📧 Email Examples

### Email 1: Admin Notification

**To:** Your Gmail address  
**Subject:** 🎬 New Quotation Request from [Customer Name]

**Contains:**
- Customer name, email, phone, company
- Project title and dates
- Location/region
- Complete equipment list with quantities
- Customer's message
- Reply-To set to customer's email

### Email 2: Customer Confirmation

**To:** Customer's email address  
**Subject:** ✅ Quotation Request Confirmation - Cambroos

**Contains:**
- Personalized greeting
- Confirmation message
- Order summary
- Equipment list
- Timeline (24-hour response)
- Your contact information

---

## 🎨 Email Design

Both emails feature:
- ✅ Professional HTML formatting
- ✅ Cambroos branding
- ✅ Mobile-responsive design
- ✅ Clear visual hierarchy
- ✅ Easy-to-read tables
- ✅ Modern color scheme

---

## 📂 Important Files

### Documentation:
- **`GMAIL_SETUP_GUIDE.md`** - Step-by-step Gmail setup
- **`VERCEL_DEPLOYMENT_GUIDE.md`** - Complete deployment guide
- **`DEPLOY_TO_VERCEL.md`** - Quick deployment steps
- **`EMAIL_TEMPLATES_OVERVIEW.md`** - Email template details
- **`VERCEL_CHECKLIST.md`** - Deployment checklist

### Code Files:
- **`api/send-order.js`** - Serverless email function
- **`src/pages/CartPage.tsx`** - Quote form page
- **`src/services/emailService.js`** - Email service (for local dev)
- **`.env.example`** - Environment variables template

---

## 🔒 Security Notes

### ✅ Safe Practices:
- Using App Passwords (not regular Gmail password)
- Environment variables stored securely in Vercel
- `.env` file excluded from Git
- 2-Factor Authentication enabled

### ⚠️ Never:
- Share your app password publicly
- Commit `.env` file to Git
- Use your regular Gmail password
- Hardcode passwords in code

---

## 🧪 Testing

### Local Testing:
```bash
# Create .env file with your credentials
# Then run:
node test-email-service.js
```

### Production Testing:
1. Visit your live site
2. Add items to cart
3. Submit quote request
4. Verify both emails arrive

---

## 🐛 Troubleshooting

### Emails Not Sending

**Check:**
1. All 5 environment variables are set in Vercel
2. App password is correct (no spaces)
3. Project was redeployed after adding variables
4. Check Vercel function logs for errors

**View Logs:**
- Vercel Dashboard → Functions → `/api/send-order`

### "Invalid Credentials" Error

**Solution:**
1. Generate a new Gmail App Password
2. Update `SENDER_PASSWORD` in Vercel
3. Redeploy

### Form Shows Error

**Check:**
- Browser console for error messages
- Vercel function logs
- Network tab in DevTools
- Verify API endpoint is accessible

---

## 📊 Monitoring

### Check Email Delivery:
- Monitor your Gmail inbox for quotation requests
- Check spam folder if emails don't arrive
- Verify customer confirmation emails are sent

### Vercel Dashboard:
- **Functions:** View API logs
- **Deployments:** See deployment history
- **Analytics:** Track site visitors (if enabled)

---

## 🔄 Making Changes

### Update Email Content:
1. Edit `api/send-order.js`
2. Modify the HTML email templates
3. Commit and push to GitHub
4. Vercel auto-deploys

### Update Environment Variables:
1. Go to Vercel → Settings → Environment Variables
2. Edit the variable
3. Redeploy the project

---

## 💰 Costs

### Vercel (Current Plan: Hobby - Free):
- ✅ Unlimited deployments
- ✅ Serverless functions included
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS

### Gmail:
- ✅ Free (using your existing Gmail account)
- ✅ No additional costs

---

## 📈 Scaling

If you need more capacity:

### Vercel Pro Plan ($20/month):
- More function invocations
- Faster CPU (2 vCPUs)
- More memory (4 GB)
- Priority support

### Gmail Limits:
- Free Gmail: 500 emails/day
- Google Workspace: 2,000 emails/day

---

## 🎯 Next Steps

1. **Complete Gmail Setup:**
   - Follow `GMAIL_SETUP_GUIDE.md`
   - Generate App Password
   
2. **Add to Vercel:**
   - Add 5 environment variables
   - Redeploy
   
3. **Test:**
   - Submit a test quote
   - Verify emails arrive
   
4. **Go Live:**
   - Share your website URL
   - Monitor quotation requests

---

## 📞 Support

### Documentation:
- `GMAIL_SETUP_GUIDE.md` - Gmail setup
- `VERCEL_DEPLOYMENT_GUIDE.md` - Deployment help
- `EMAIL_TEMPLATES_OVERVIEW.md` - Email details

### Vercel Support:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Gmail Support:
- [Google Account Help](https://support.google.com/accounts)
- [App Passwords Help](https://support.google.com/accounts/answer/185833)

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Gmail 2FA enabled
- [ ] App Password generated
- [ ] All 5 environment variables added to Vercel
- [ ] Project redeployed
- [ ] Test email sent successfully
- [ ] Production form tested
- [ ] Both emails received (admin + customer)
- [ ] Email formatting looks good
- [ ] Reply-To works correctly
- [ ] Mobile responsive verified

---

## 🎉 You're Ready!

Your Cambroos quotation system is fully set up and ready to receive customer requests. Every submission will automatically send professional emails to both you and your customers!

**What happens automatically:**
1. ✅ Customer submits quote request
2. ✅ You receive detailed quotation email
3. ✅ Customer receives confirmation email
4. ✅ You can reply directly from your email
5. ✅ All information is professionally formatted

**Your live site:** Check your Vercel dashboard for the URL

---

## 📋 Quick Reference

### Vercel Project Settings:
- **Project Name:** cambroos
- **Framework:** Vite (React)
- **Build Command:** `vite build`
- **Output Directory:** `dist`

### API Endpoint:
- **Production:** `https://your-site.vercel.app/api/send-order`
- **Method:** POST
- **Content-Type:** application/json

### Email Service:
- **Provider:** Gmail SMTP
- **Port:** 465 (Secure)
- **Authentication:** App Password

---

**Need help?** Refer to the detailed guides in the documentation files!
