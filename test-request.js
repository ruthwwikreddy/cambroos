import fetch from 'node-fetch';

const testData = {
  customer: {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    company: 'Test Company',
    country: 'Test Country'
  },
  project: {
    title: 'Test Project',
    message: 'This is a test message',
    rentalPeriod: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    }
  },
  items: [
    {
      id: '1',
      name: 'Test Camera',
      brand: 'Test Brand',
      quantity: 2
    }
  ]
};

async function testApi() {
  try {
    console.log('Sending test request to API...');
    const response = await fetch('http://localhost:3000/api/send-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(result, null, 2));
    
    if (result.previewUrl) {
      console.log('\nEmail preview URL:', result.previewUrl);
      console.log('Open this URL in your browser to view the email preview');
    }
    
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testApi();
