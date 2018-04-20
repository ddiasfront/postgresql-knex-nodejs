const knex = require('../db/knex')
const request = require('supertest')
const app = require('../app')
const expect = require('chai').expect;

describe('CRUD Stickers', () => {
  before((done) => {
    knex.migrate.latest()
    .then(() => {
      return knex.seed.run();
    }).then(() => done())
  })

  it('Sets a list of all bahia.', () => {
    request(app)
    .get('/api/v1/bahia')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      console.log(response.body)
      expect(response.body).to.be.a('array');
      done()
    });
  })
})