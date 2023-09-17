const createServer = require('./createServer');
const MathBasic = require('./MathBasic');

describe('An HTTP Server', () => {
  describe('when GET /add', () => {
    it(`should respond with a status code of 200
        and the payload value is addition result of a and b correctly`,
    async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /substract', () => {
    it(`should respond with a status code of 200
        and the payload value is substraction result of a and b correctly`,
    async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubstract = jest.spyOn(MathBasic, 'substract');
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/substract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubstract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it(`should respond with a status code of 200
        and the payload value is multiply result of a and b correctly`,
    async () => {
      // Arrange
      const a = 2;
      const b = 8;
      const spySubstract = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(16);
      expect(spySubstract).toBeCalledWith(a, b);
    });
  });
});
