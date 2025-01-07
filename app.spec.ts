import app from './src/app'
import request from 'supertest'
describe('App', () => {
  it('should return 200 status code ', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })
})
