# Email Templates Overview

## Two-Email System

When a customer submits a quotation request, **two emails are automatically sent**:

---

## 📧 Email 1: Admin Notification

**Recipient:** `akkenapally.reddy@gmail.com` (Admin)

**Subject:** `🎬 New Quotation Request from [Customer Name]`

**Purpose:** Notify admin of new quotation request with all details

### Content Includes:
- ✅ **Customer Information**
  - Full name
  - Email address
  - Phone number
  - Company name

- ✅ **Project Details**
  - Project title
  - Start date
  - End date
  - Location/Country

- ✅ **Requested Equipment**
  - Complete list of items with quantities
  - Brand information

- ✅ **Additional Message** (if provided)
  - Customer's custom message/notes

- ✅ **Action Required**
  - Clear call-to-action to respond to customer
  - Reply-To automatically set to customer's email

### Design Features:
- Professional HTML formatting
- Blue color scheme (#2563eb)
- Organized tables for easy reading
- Highlighted equipment list
- Mobile-responsive design

---

## 📧 Email 2: Customer Confirmation

**Recipient:** Customer's email address

**Subject:** `✅ Quotation Request Confirmation - Cambroos`

**Purpose:** Confirm receipt of quotation request and set expectations

### Content Includes:
- ✅ **Personalized Greeting**
  - Uses customer's name
  - Branded Cambroos header

- ✅ **Confirmation Message**
  - Clear confirmation that request was received
  - Timeline expectation (24 hours response)

- ✅ **Request Summary**
  - Project name
  - Rental period
  - Location
  - List of requested equipment

- ✅ **Next Steps**
  - What happens next
  - When to expect response
  - Contact information if questions arise

### Design Features:
- Professional branded design
- Success-oriented color scheme (blue and green)
- Clear visual hierarchy
- Reassuring tone
- Contact information included
- Disclaimer about automated email

---

## Email Flow Diagram

```
Customer Submits Form
        ↓
Backend API Receives Request
        ↓
    ┌───────────────────────┐
    │   Email Service       │
    └───────────────────────┘
            ↓
    ┌───────┴───────┐
    ↓               ↓
Email 1          Email 2
(Admin)       (Customer)
    ↓               ↓
Admin gets      Customer gets
notification    confirmation
```

---

## Key Benefits

### For Admin:
- 📬 Instant notification of new requests
- 📊 All information in one organized email
- 💬 Easy reply (Reply-To set to customer)
- 📱 Mobile-friendly format

### For Customer:
- ✅ Immediate confirmation
- 📋 Summary of their request
- ⏰ Clear expectations (24hr response)
- 🤝 Professional brand experience
- 📧 Contact info if questions arise

---

## Technical Details

- **Email Service:** Nodemailer with Gmail SMTP
- **Port:** 465 (secure)
- **Authentication:** App-specific password
- **Format:** HTML with inline CSS
- **Encoding:** UTF-8
- **Emojis:** Supported ✅

---

## Testing

To test the email system:

```bash
# Test with the test script
node test-email-service.js

# Or submit a real form through the app
npm run dev:all
# Then go to http://localhost:5173/cart
```

Both emails will be sent automatically!
