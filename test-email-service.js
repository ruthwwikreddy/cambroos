import { sendOrderRequest } from './src/services/emailService.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Test data that matches our form structure
const testData = {
  to_email: 'akkenapally.reddy@gmail.com',
  from_name: 'Test User',
  from_email: 'akkenapally.reddy@gmail.com',
  phone: '1234567890',
  company: 'Test Company',
  project_title: 'Test Project',
  start_date: '2025-10-20',
  end_date: '2025-10-25',
  country: 'Test Country',
  message: 'This is a test message from our new email service',
  cart_items: [
    { id: '1', name: 'Test Product', brand: 'Test Brand', quantity: 1 },
    { id: '2', name: 'Another Product', brand: 'Test Brand', quantity: 2 }
  ]
};

console.log('🚀 Sending test quotation request emails...\n');

// Send the test email
sendOrderRequest(testData)
  .then(result => {
    console.log('\n✅ Test email result:', result);
    console.log('\n📧 TWO EMAILS SENT:');
    console.log('   1. Quotation Request → akkenapally.reddy@gmail.com (Admin)');
    console.log('   2. Quotation Confirmation → akkenapally.reddy@gmail.com (Customer)');
    console.log('\n📬 Check your Gmail inbox for both emails!');
  })
  .catch(error => {
    console.error('❌ Error sending test emails:', error);
  });
