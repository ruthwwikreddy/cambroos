# 🚀 Quick Reference Guide

## Start the Application

```bash
npm run dev:all
```

**That's it!** Both frontend and backend will start automatically.

---

## 📧 Two Emails Sent Automatically

### When a customer submits the quote form:

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER SUBMITS FORM                     │
│  (Name, Email, Phone, Project Details, Equipment List)      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              BACKEND PROCESSES & SENDS 2 EMAILS             │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
        ┌───────────────────┐  ┌───────────────────┐
        │   EMAIL 1 (ADMIN) │  │ EMAIL 2 (CUSTOMER)│
        └───────────────────┘  └───────────────────┘
                    ↓                   ↓
        ┌───────────────────┐  ┌───────────────────┐
        │ akkenapally.reddy │  │  Customer's Email │
        │   @gmail.com      │  │                   │
        └───────────────────┘  └───────────────────┘
```

---

## 📬 Email 1: Admin Notification

**TO:** akkenapally.reddy@gmail.com  
**SUBJECT:** 🎬 New Quotation Request from [Customer Name]

**CONTAINS:**
- ✅ Customer contact info (name, email, phone, company)
- ✅ Project details (title, dates, location)
- ✅ Full equipment list with quantities
- ✅ Customer's message
- ✅ Reply-To set to customer's email

**PURPOSE:** You get all the info to prepare a quote

---

## ✅ Email 2: Customer Confirmation

**TO:** [Customer's Email]  
**SUBJECT:** ✅ Quotation Request Confirmation - Cambroos

**CONTAINS:**
- ✅ Confirmation message
- ✅ Summary of their request
- ✅ Equipment list
- ✅ Timeline (24hr response)
- ✅ Your contact info

**PURPOSE:** Customer knows their request was received

---

## 🧪 Test It Now

### Option 1: Use Test Script
```bash
node test-email-service.js
```

### Option 2: Use the App
1. Start: `npm run dev:all`
2. Open: http://localhost:5173
3. Add items to cart
4. Fill form and submit
5. Check email!

---

## 🎯 What You'll See

### In Terminal:
```
✅ Quotation request email sent to admin: <message-id>
✅ Quotation confirmation email sent to customer: <message-id>
```

### In Admin Email:
- Subject: 🎬 New Quotation Request from John Doe
- Beautiful HTML email with all details
- Can reply directly to customer

### In Customer Email:
- Subject: ✅ Quotation Request Confirmation - Cambroos
- Professional confirmation
- Clear next steps

---

## 🔧 Ports Used

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3001

---

## ⚡ Quick Commands

| Command | What It Does |
|---------|--------------|
| `npm run dev:all` | Start both frontend & backend |
| `npm run dev` | Start frontend only |
| `npm run server` | Start backend only |
| `node test-email-service.js` | Test emails |

---

## 🎊 You're All Set!

The email service is **fully implemented** and **ready to use**. 

Just run `npm run dev:all` and you'll start receiving professional quotation requests with automatic customer confirmations!
