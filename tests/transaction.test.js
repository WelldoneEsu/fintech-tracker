const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('Transaction Routes', () => {
  let token, userId;

  beforeEach(async () => {
    await User.deleteMany(); // cleanup to avoid duplicate email error

    const user = await User.create({
      name: "payme",
      email: "test@example.com",
      password: "123456",
      accountType: "savings",
      balance: 10000,
    });

    userId = user._id;
    token = jwt.sign({ id: userId, role: user.role }, process.env.JWT_SECRET);
  });

  it('should credit user amount', async () => {
    const res = await request(app)
      .post('/api/transactions')
      .set('Authorization', `Bearer ${token}`)
      .send({ type: 'credit', amount: 200});

    expect(res.statusCode).toBe(201);
    expect(res.body.transaction.type).toBe('credit');
    expect(res.body.transaction.amount).toBe(200); 
  });

  it('should not allow debit more than balance', async () => {
    const res = await request(app)
      .post('/api/transactions')
      .set('Authorization', `Bearer ${token}`)
      .send({ type: 'debit', amount: 2000 }); 

    expect(res.statusCode).toBe(403); 
    expect(res.body.transaction.type).toBe('debit');
    expect(res.body.transaction.amount).toBe(200); 
  });
  });
