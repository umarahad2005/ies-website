// Simple test script for the contact API
// Run with: node test-api.js

const testContactAPI = async () => {
  const API_URL = 'http://localhost:3001';
  
  console.log('🧪 Testing IES Backend API\n');
  
  // Test 1: Health Check
  console.log('Test 1: Health Check');
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log('✅ Health Check Response:', data);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
    console.log('⚠️  Make sure backend is running: npm run dev');
    return;
  }
  
  console.log('\n---\n');
  
  // Test 2: Contact Form Submission
  console.log('Test 2: Contact Form Submission');
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+92 300 1234567',
      subject: 'Test Submission',
      message: 'This is a test message from the test script.'
    };
    
    console.log('📤 Sending:', testData);
    
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Contact Form Test Passed!');
      console.log('📧 Check your email inbox for:');
      console.log('   1. Company notification email');
      console.log('   2. Auto-reply to test@example.com');
    } else {
      console.log('❌ Contact Form Test Failed:', data.error);
    }
  } catch (error) {
    console.log('❌ Contact Form Test Failed:', error.message);
  }
  
  console.log('\n---\n');
  
  // Test 3: Validation Test (Missing Required Fields)
  console.log('Test 3: Validation Test (should fail)');
  try {
    const invalidData = {
      name: 'Test User',
      // Missing email and message
    };
    
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invalidData)
    });
    
    const data = await response.json();
    
    if (!data.success) {
      console.log('✅ Validation Test Passed (correctly rejected invalid data)');
      console.log('   Error:', data.error);
    } else {
      console.log('❌ Validation Test Failed (should have rejected invalid data)');
    }
  } catch (error) {
    console.log('❌ Validation Test Error:', error.message);
  }
  
  console.log('\n---\n');
  console.log('🎉 Testing Complete!');
  console.log('\nIf all tests passed:');
  console.log('✅ Backend is running correctly');
  console.log('✅ Email configuration is working');
  console.log('✅ Validation is working');
  console.log('\nNext steps:');
  console.log('1. Check your email inbox for test emails');
  console.log('2. Test the contact form in the browser');
  console.log('3. Deploy to Vercel (see DEPLOYMENT_GUIDE.md)');
};

testContactAPI();
