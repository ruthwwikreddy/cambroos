# Quick Start Guide

## Start the Application

Run this single command to start both the frontend and backend:

```bash
npm run dev:all
```

This will start:
- **Frontend** (Vite React app) on `http://localhost:5173`
- **Backend** (Email service) on `http://localhost:3001`

## What's Running

1. **Frontend**: Your Cambroos website with the cart and quote form
2. **Backend**: Email service API that handles sending order requests via Gmail

## Testing the Email Service

1. Open `http://localhost:5173` in your browser
2. Browse products and add items to cart
3. Go to the cart page
4. Fill out the quote request form
5. Submit the form
6. Check `akkenapally.reddy@gmail.com` for the order notification
7. Check the customer email for the confirmation

## Troubleshooting

**If port 3001 is already in use:**
- Stop any other services running on port 3001
- Or change the port in `server.js` (line 4)

**If emails aren't sending:**
- Check that your `.env` file has the correct SMTP credentials
- Verify the backend server is running (you should see "Email service running on http://localhost:3001")
- Check the terminal for any error messages

**If the frontend can't connect to backend:**
- Make sure both servers are running
- Check that the backend is on port 3001
- Look for CORS errors in the browser console
