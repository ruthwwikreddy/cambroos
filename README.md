# 🎬 Cambroos - Professional Equipment Rentals

A modern, responsive equipment rental website with automated email quotation system.

## 🚀 Features

- ✅ **Equipment Catalog** - Cameras, lenses, lighting, grip gear, and more
- ✅ **Shopping Cart System** - Add items and request quotes
- ✅ **Automated Email System** - Two professional emails sent automatically:
  - Admin notification with full quotation details
  - Customer confirmation with order summary
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Built with React, TypeScript, and Tailwind CSS

---

## 📋 Quick Start

### For Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:8080
```

### For Production (Vercel)

See **[DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)** for deployment instructions.

---

## 📧 Email System Setup

The quotation system requires Gmail App Password configuration.

**📖 Complete Guide:** [GMAIL_SETUP_GUIDE.md](./GMAIL_SETUP_GUIDE.md)

### Quick Setup:

1. **Enable 2FA** on your Gmail account
2. **Generate App Password** at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. **Add to Vercel** environment variables:
   - `SMTP_SERVER` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SENDER_EMAIL` = your Gmail
   - `SENDER_PASSWORD` = your App Password
   - `ADMIN_EMAIL` = email to receive quotes
4. **Redeploy** your Vercel project

---

## 📁 Project Structure

```
cambroos/
├── api/
│   └── send-order.js          # Serverless email function
├── src/
│   ├── components/            # React components
│   ├── pages/                 # Page components
│   │   └── CartPage.tsx       # Quote request form
│   ├── contexts/              # React contexts
│   ├── data/                  # Product data
│   └── assets/                # Images and static files
├── public/                    # Public assets
├── vercel.json               # Vercel configuration
└── package.json              # Dependencies
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **Backend:** Vercel Serverless Functions
- **Email:** Nodemailer with Gmail SMTP
- **Deployment:** Vercel
- **Form:** React Hook Form with Zod validation

---

## 📚 Documentation

| File | Description |
|------|-------------|
| **[CLIENT_HANDOVER_GUIDE.md](./CLIENT_HANDOVER_GUIDE.md)** | Complete client handover documentation |
| **[GMAIL_SETUP_GUIDE.md](./GMAIL_SETUP_GUIDE.md)** | Gmail App Password setup instructions |
| **[DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)** | Quick deployment guide |
| **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** | Detailed deployment documentation |

---

## 🔧 Environment Variables

Create a `.env` file for local development (see `.env.example`):

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

**⚠️ Important:** Never commit the `.env` file to Git!

---

## 🧪 Testing

### Local Testing

The email system works in development using the local Express server:

```bash
# Start both frontend and backend
npm run dev:all
```

### Production Testing

After deploying to Vercel:
1. Visit your live site
2. Add items to cart
3. Fill out the quote form
4. Submit and check emails

---

## 📧 Email Flow

```
Customer Submits Quote
        ↓
API: /api/send-order
        ↓
    ┌───────┴───────┐
    ↓               ↓
Email 1          Email 2
(Admin)       (Customer)
```

**Email 1 (Admin):**
- Subject: 🎬 New Quotation Request from [Name]
- Contains: Full customer details, project info, equipment list
- Reply-To: Customer's email

**Email 2 (Customer):**
- Subject: ✅ Quotation Request Confirmation
- Contains: Order summary, timeline, next steps
- Professional Cambroos branding

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push

# Vercel auto-deploys!
```

Or manually:

```bash
vercel --prod
```

**📖 Full Guide:** [DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)

---

## 🔒 Security

- ✅ Environment variables stored securely in Vercel
- ✅ Gmail App Passwords (not regular passwords)
- ✅ `.env` file excluded from Git
- ✅ CORS properly configured
- ✅ Input validation on all forms

---

## 📱 Features

### Equipment Categories
- 📷 Cameras
- 🔍 Lenses
- 💡 Lighting
- 🎥 Production Equipment
- 🎬 Grip & Rigging
- 🚁 Drones

### Cart System
- Add/remove items
- Quantity adjustment
- Persistent cart (localStorage)
- Clear all functionality

### Quote Form
- Customer information
- Project details
- Date range selection
- Location/region
- Additional message
- Form validation

---

## 🐛 Troubleshooting

### Emails Not Sending

**Check:**
1. Environment variables are set in Vercel
2. App Password is correct (no spaces)
3. Project was redeployed after adding variables
4. Check Vercel function logs

**View Logs:**
- Vercel Dashboard → Functions → `/api/send-order`

### Build Fails

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Form Submission Error

**Check:**
- Browser console for errors
- Network tab in DevTools
- Vercel function logs
- API endpoint accessibility

---

## 📊 Scripts

```bash
npm run dev          # Start frontend only
npm run server       # Start backend only (local)
npm run dev:all      # Start both (local development)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🎯 Next Steps

1. **Setup Gmail:** Follow [GMAIL_SETUP_GUIDE.md](./GMAIL_SETUP_GUIDE.md)
2. **Deploy:** Follow [DEPLOY_TO_VERCEL.md](./DEPLOY_TO_VERCEL.md)
3. **Test:** Submit a quote request
4. **Go Live:** Share your site!

---

## 📞 Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Gmail Help:** [support.google.com/accounts](https://support.google.com/accounts)
- **React Docs:** [react.dev](https://react.dev)

---

## ✅ Pre-Launch Checklist

- [ ] Gmail App Password generated
- [ ] Environment variables added to Vercel
- [ ] Project deployed successfully
- [ ] Test quote submitted
- [ ] Both emails received
- [ ] Mobile responsiveness verified
- [ ] All pages working correctly

---

## 📄 License

Private project for Cambroos Equipment Rentals.

---

## 🎉 Ready to Go!

Your Cambroos website is ready to receive quotation requests with automated professional email responses!

**Live Site:** Check your Vercel dashboard for the URL

**Questions?** See the documentation files in this repository.
