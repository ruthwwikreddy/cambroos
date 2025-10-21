# Email Service Implementation

## Overview
The email service has been successfully integrated into the CartPage using your tested nodemailer implementation.

## Architecture
- **Backend**: Express server (`server.js`) running on port 3001
- **Email Service**: `src/services/emailService.js` using nodemailer with Gmail SMTP
- **Frontend**: CartPage sends requests to the backend API

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Make sure your `.env` file contains:
```
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=465
SENDER_EMAIL=akkenapally.reddy@gmail.com
SENDER_PASSWORD=zfmeuobywsxascyg
```

### 3. Run the Application

**Option A: Run both frontend and backend together (Recommended)**
```bash
npm run dev:all
```

**Option B: Run separately**
```bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - Frontend
npm run dev
```

## How It Works

1. **User fills out the quote form** on the CartPage with:
   - Personal details (name, email, phone)
   - Project information (title, dates, country)
   - Selected equipment (cart items)

2. **Frontend sends POST request** to `http://localhost:3001/api/send-order`

3. **Backend processes the request** and calls `sendOrderRequest()` from `emailService.js`

4. **Two professional emails are sent automatically**:
   
   **Email 1: Quotation Request to Admin** (`akkenapally.reddy@gmail.com`)
   - Subject: "🎬 New Quotation Request from [Customer Name]"
   - Contains: Full customer details, project information, requested equipment list
   - Formatted with professional HTML styling
   - Reply-To set to customer's email for easy response
   
   **Email 2: Quotation Request Confirmation to Customer**
   - Subject: "✅ Quotation Request Confirmation - Cambroos"
   - Contains: Order summary, requested equipment, next steps
   - Professional branded email with Cambroos branding
   - Reassures customer their request was received

## API Endpoint

### POST `/api/send-order`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "company": "Test Company",
  "projectTitle": "Test Project",
  "startDate": "2025-10-20",
  "endDate": "2025-10-25",
  "country": "central",
  "message": "Additional notes",
  "cartItems": [
    {
      "id": "1",
      "name": "Product Name",
      "brand": "Brand Name",
      "quantity": 2
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order request sent successfully"
}
```

## Testing

You can test the email service using the existing test file:
```bash
node test-email-service.js
```

## Notes

- The backend server must be running for the email functionality to work
- Make sure port 3001 is available
- Gmail SMTP requires an app-specific password (already configured in `.env`)
- The service sends HTML-formatted emails with all order details
