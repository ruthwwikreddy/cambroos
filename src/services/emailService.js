import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a transporter object using Gmail SMTP with secure connection
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
  }
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error with email configuration:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send order request email
export const sendOrderRequest = async (data) => {
  try {
    // Format cart items for email
    const cartItemsHtml = data.cart_items.map(item => 
      `<li>${item.quantity}x ${item.name} (${item.brand})</li>`
    ).join('');

    // Send quotation request email to admin
    const info = await transporter.sendMail({
      from: `"Cambroos - Quotation System" <${process.env.SENDER_EMAIL}>`,
      replyTo: `"${data.from_name}" <${data.from_email}>`,
      to: data.to_email,
      subject: `🎬 New Quotation Request from ${data.from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">📋 New Quotation Request</h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">Customer Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.from_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.from_email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.company}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">Project Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Project Title:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.project_title}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Start Date:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.start_date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>End Date:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.end_date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.country}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">📦 Requested Equipment</h3>
              <ul style="list-style: none; padding: 0; background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                ${cartItemsHtml}
              </ul>
            </div>

            ${data.message !== 'No additional message' ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">💬 Additional Message</h3>
              <p style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; color: #333;">${data.message}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 14px;">
              <p><strong>Action Required:</strong> Please review this quotation request and respond to the customer at ${data.from_email}</p>
            </div>
          </div>
        </div>
      `
    });

    console.log('✅ Quotation request email sent to admin: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Send quotation request confirmation email to customer
    await sendOrderConfirmation(data);
    
    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Function to send quotation request confirmation email to customer
export const sendOrderConfirmation = async (data) => {
  try {
    // Format cart items for customer email
    const cartItemsHtml = data.cart_items.map(item => 
      `<li style="padding: 5px 0; color: #333;">${item.quantity}x ${item.name} (${item.brand})</li>`
    ).join('');

    const info = await transporter.sendMail({
      from: `"Cambroos Equipment Rentals" <${process.env.SENDER_EMAIL}>`,
      to: data.from_email,
      subject: '✅ Quotation Request Confirmation - Cambroos',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0;">Cambroos</h1>
              <p style="color: #666; margin: 5px 0;">Professional Equipment Rentals</p>
            </div>

            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #1e40af; margin: 0 0 10px 0;">✅ Quotation Request Received!</h2>
              <p style="color: #1e3a8a; margin: 0;">Thank you for your interest, ${data.from_name}!</p>
            </div>

            <p style="color: #333; line-height: 1.6;">We've successfully received your quotation request and our team is reviewing it. We'll get back to you shortly with a detailed quote.</p>

            <div style="margin: 25px 0;">
              <h3 style="color: #333; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📋 Your Request Summary</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Project:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.project_title}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Rental Period:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.start_date} to ${data.end_date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Location:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.country}</td>
                </tr>
              </table>

              <h4 style="color: #333; margin: 20px 0 10px 0;">📦 Requested Equipment:</h4>
              <ul style="list-style: none; padding: 0; background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 0;">
                ${cartItemsHtml}
              </ul>
            </div>

            <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="color: #166534; margin: 0; font-weight: 500;">⏱️ What happens next?</p>
              <p style="color: #166534; margin: 10px 0 0 0;">Our team will review your request and send you a detailed quotation within 24 hours.</p>
            </div>

            <div style="margin: 25px 0;">
              <p style="color: #333; line-height: 1.6;">If you have any questions or need to make changes to your request, please don't hesitate to contact us.</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #333; margin: 0;"><strong>Best regards,</strong></p>
              <p style="color: #333; margin: 5px 0;">The Cambroos Team</p>
              <p style="color: #666; font-size: 14px; margin: 15px 0 0 0;">📧 ${process.env.SENDER_EMAIL}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
          </div>
        </div>
      `
    });

    console.log('✅ Quotation confirmation email sent to customer: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error: error.message };
  }
};

export default {
  sendOrderRequest,
  sendOrderConfirmation
};
