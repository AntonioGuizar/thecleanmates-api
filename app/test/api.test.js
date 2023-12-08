const app = require('../../server.js');
const session = require('supertest-session');

const testSession = session(app);

describe('Auth API Tests', () => {

  // Test for unsuccessful attempt to get all brands without authentication
  it('should not return brands if not authorized', async () => {
    const response = await testSession.get('/api/brand/all');

    expect(response.status).toBe(403);
  });

  it('should sign in successfully', async () => {
    const response = await testSession
      .post('/api/auth/signin')
      .send({
        username: 'Antonio Guizar',
        password: '$Gu1z4r$',
      });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('email');
  });

  // Test for unsuccessful sign in attempt
  it('should not sign in with wrong credentials', async () => {
    const response = await testSession
      .post('/api/auth/signin')
      .send({
        username: 'wrongusername',
        password: 'wrongpassword',
      });

    expect(response.status).toBe(401);
  });

  // Test for sign in attempt with missing credentials
  it('should not sign in with missing credentials', async () => {
    const response = await testSession
      .post('/api/auth/signin')
      .send({
        username: '',
        password: '',
      });

    expect(response.status).toBe(400);
  });
});

describe('Brand API Tests', () => {
  // Test for getting a single brand
  it('should return a single brand', async () => {
    const response = await testSession.get('/api/brand/1');

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('brand');
  });

  // Test for getting all brands after authentication
  it('should return all brands', async () => {

    // Make the request to get all brands
    const response = await testSession.get('/api/brand/all');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('brands');
  });
});