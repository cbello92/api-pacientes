const supertest = require('supertest');
const apiClient = supertest.agent('http://localhost:4000');
exports.apiClient = apiClient;