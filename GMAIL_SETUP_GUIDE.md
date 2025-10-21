# 📧 Gmail App Password Setup Guide

This guide will help you set up a Gmail App Password for the Cambroos email service. This is required for the quotation request system to send emails automatically.

---

## 🎯 What You Need

- A Gmail account (e.g., `your-email@gmail.com`)
- 2-Factor Authentication enabled on your Google account
- Access to Google Account settings

---

## ⚠️ Important Security Note

**App Passwords** are special passwords that allow apps to access your Gmail account securely **without** using your regular Gmail password. This is much safer than using your actual password.

---

## 📋 Step-by-Step Instructions

### Step 1: Enable 2-Factor Authentication (If Not Already Enabled)

1. Go to **[Google Account Security](https://myaccount.google.com/security)**
2. Scroll down to **"How you sign in to Google"**
3. Click on **"2-Step Verification"**
4. Follow the prompts to set up 2FA using:
   - Your phone number (SMS or call)
   - Google Authenticator app
   - Or other methods

**Note:** You MUST have 2-Factor Authentication enabled to create App Passwords.

---

### Step 2: Create an App Password

1. **Go to App Passwords page:**
   - Visit: **[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
   - Or navigate manually:
     - Go to [myaccount.google.com](https://myaccount.google.com)
     - Click **"Security"** in the left sidebar
     - Scroll down to **"How you sign in to Google"**
     - Click **"2-Step Verification"**
     - Scroll to the bottom and click **"App passwords"**

2. **Sign in if prompted:**
   - Enter your Gmail password
   - Complete 2FA verification

3. **Create the App Password:**
   - You'll see a page titled **"App passwords"**
   - In the **"Select app"** dropdown, choose **"Other (Custom name)"**
   - Type a name: `Cambroos Email Service`
   - Click **"Generate"**

4. **Copy the App Password:**
   - Google will show you a **16-character password** like: `abcd efgh ijkl mnop`
   - **IMPORTANT:** Copy this password immediately!
   - It will look like: `abcdefghijklmnop` (without spaces when you copy it)
   - You won't be able to see it again!

5. **Click "Done"**

---

## 📝 What to Do with the App Password

You now have all the information needed for the email service:

### Information to Provide:

| Setting | Value | Example |
|---------|-------|---------|
| **SMTP Server** | `smtp.gmail.com` | `smtp.gmail.com` |
| **SMTP Port** | `465` | `465` |
| **Sender Email** | Your Gmail address | `your-email@gmail.com` |
| **Sender Password** | The 16-character app password | `abcdefghijklmnop` |
| **Admin Email** | Email to receive quotations | `your-email@gmail.com` |

---

## 🔧 Adding to Vercel (For Deployment)

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Select your **Cambroos** project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar
5. Add each variable by clicking **"Add New"**:

**Add these 5 variables:**

| Name | Value | Environment |
|------|-------|-------------|
| `SMTP_SERVER` | `smtp.gmail.com` | Production |
| `SMTP_PORT` | `465` | Production |
| `SENDER_EMAIL` | `your-email@gmail.com` | Production |
| `SENDER_PASSWORD` | `your-app-password` | Production |
| `ADMIN_EMAIL` | `your-email@gmail.com` | Production |

6. Click **"Save"** for each variable
7. Go to **"Deployments"** tab
8. Click **"..."** on the latest deployment
9. Click **"Redeploy"**

### Method 2: Via Vercel CLI

```bash
vercel env add SMTP_SERVER
# Enter value: smtp.gmail.com
# Select: Production

vercel env add SMTP_PORT
# Enter value: 465
# Select: Production

vercel env add SENDER_EMAIL
# Enter value: your-email@gmail.com
# Select: Production

vercel env add SENDER_PASSWORD
# Enter value: your-app-password
# Select: Production

vercel env add ADMIN_EMAIL
# Enter value: your-email@gmail.com
# Select: Production

# Then redeploy
vercel --prod
```

---

## 🧪 Testing the Setup

### Test Locally:

1. Create a `.env` file in your project root:
```
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

2. Run the test script:
```bash
node test-email-service.js
```

3. Check your Gmail inbox for 2 test emails

### Test on Production:

1. Visit your live site
2. Add items to cart
3. Fill out the quotation form
4. Submit
5. Check your Gmail for:
   - **Email 1:** Quotation request (to admin)
   - **Email 2:** Confirmation (to customer)

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Use App Passwords (not your regular Gmail password)
- ✅ Keep the app password secret
- ✅ Store it securely in Vercel environment variables
- ✅ Add `.env` to `.gitignore` (already done)
- ✅ Enable 2-Factor Authentication on your Gmail

### ❌ DON'T:
- ❌ Share your app password publicly
- ❌ Commit the `.env` file to Git
- ❌ Use your regular Gmail password
- ❌ Hardcode passwords in your code
- ❌ Share screenshots with passwords visible

---

## 🔄 Revoking an App Password

If you need to revoke the app password:

1. Go to **[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
2. Find **"Cambroos Email Service"** in the list
3. Click the **trash icon** next to it
4. Create a new one if needed

---

## 🐛 Troubleshooting

### "App passwords" option not available

**Solution:** Enable 2-Factor Authentication first
- Go to [myaccount.google.com/security](https://myaccount.google.com/security)
- Set up 2-Step Verification
- Then try accessing App Passwords again

### "Invalid credentials" error

**Possible causes:**
1. Wrong app password (check for typos)
2. Spaces in the password (remove all spaces)
3. Using regular Gmail password instead of app password
4. App password was revoked

**Solution:** Generate a new app password and update it in Vercel

### Emails not sending

**Check:**
1. Environment variables are set correctly in Vercel
2. App password is correct (no spaces)
3. SMTP settings are correct:
   - Server: `smtp.gmail.com`
   - Port: `465`
4. Check Vercel function logs for errors

### "Less secure app access" message

**Note:** You don't need to enable "Less secure app access" when using App Passwords. App Passwords are the secure method.

---

## 📞 Need Help?

If you encounter issues:

1. **Check Vercel Logs:**
   - Go to your Vercel project
   - Click **"Functions"** tab
   - Look for errors in `/api/send-order`

2. **Verify Environment Variables:**
   - Go to Vercel → Settings → Environment Variables
   - Make sure all 5 variables are set

3. **Test Locally First:**
   - Run `node test-email-service.js`
   - If it works locally but not on Vercel, it's an environment variable issue

---

## ✅ Checklist

Before going live, make sure:

- [ ] 2-Factor Authentication is enabled on Gmail
- [ ] App Password is generated
- [ ] App Password is copied and saved securely
- [ ] All 5 environment variables are added to Vercel
- [ ] Project is redeployed after adding variables
- [ ] Test email sent successfully (local)
- [ ] Test form submission works (production)
- [ ] Both emails received (admin + customer)
- [ ] `.env` file is in `.gitignore`

---

## 🎉 You're All Set!

Once you've completed these steps, your Cambroos quotation system will automatically send professional emails to both you (admin) and your customers!

**What happens when a customer submits a quote:**
1. ✅ Customer fills out the form
2. ✅ You receive a detailed quotation request email
3. ✅ Customer receives a confirmation email
4. ✅ Both emails are professionally formatted
5. ✅ You can reply directly to the customer

---

## 📧 Example Email Flow

```
Customer: John Doe (john@example.com)
         ↓
    Submits Quote Request
         ↓
    ┌────────────────┐
    │  Your System   │
    └────────────────┘
         ↓
    ┌────┴────┐
    ↓         ↓
Email 1    Email 2
(To You)   (To John)
```

**Email 1 (To You):**
- Subject: 🎬 New Quotation Request from John Doe
- Contains: All customer details, project info, equipment list

**Email 2 (To Customer):**
- Subject: ✅ Quotation Request Confirmation - Cambroos
- Contains: Order summary, timeline, next steps

---

**Questions?** Check the `VERCEL_DEPLOYMENT_GUIDE.md` for more details!
