import { sendOrderRequest } from '../src/services/emailService.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

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
      to_email: process.env.ADMIN_EMAIL || 'akkenapally.reddy@gmail.com',
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
      res.status(200).json({
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
}
