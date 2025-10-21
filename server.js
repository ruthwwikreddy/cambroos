import express from 'express';
import cors from 'cors';
import { sendOrderRequest } from './src/services/emailService.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email service is running' });
});

// Email endpoint
app.post('/api/send-order', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      projectTitle,
      startDate,
      endDate,
      country,
      message,
      cartItems
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !startDate || !endDate || !country) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Format data for email service
    const emailData = {
      to_email: 'akkenapally.reddy@gmail.com',
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone,
      company: company || 'Not provided',
      project_title: projectTitle || 'Not provided',
      start_date: startDate,
      end_date: endDate,
      country,
      message: message || 'No additional message',
      cart_items: cartItems || []
    };

    // Send email using the tested email service
    const result = await sendOrderRequest(emailData);

    if (result.success) {
      res.json({
        success: true,
        message: 'Order request sent successfully'
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email'
      });
    }
  } catch (error) {
    console.error('Error in /api/send-order:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email service running on http://localhost:${PORT}`);
});
