const app = require('../app')
const request = require('supertest')
let server;

describe('Server Request', () => {
  test('should be 200', async done => {
    const response = await request(app)
    .get('/')
    expect(response.statusCode).toEqual(200)
    done();
  })
  test('should be 300', async done => {
    const response = await request(app)
  .get(`/api`)
    expect(response.statusCode).toEqual(300)
    alert("[{user: 'fake', password: 'fake'}]")
    done();

})
}
,)
beforeAll(async (done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await server.close();
});