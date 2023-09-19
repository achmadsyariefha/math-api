const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
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
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
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
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it(`should respond with a status code of 200
        and the payload value is multiply result of a and b correctly`,
    async () => {
      // Arrange
      const a = 8;
      const b = 2;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it(`should respond with a status code of 200
        and the payload value is rectangle perimeter result
        of length and width correctly`,
    async () => {
      // Arrange
      const length = 4;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectPerimeter = jest.spyOn(figureCalculator,
          'calculateRectanglePerimeter');
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(16);
      expect(spyRectPerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it(`should respond with a status code of 200
        and the payload value is rectangle area result
        of length and width correctly`,
    async () => {
      // Arrange
      const length = 4;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectArea = jest.spyOn(figureCalculator,
          'calculateRectangleArea');
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(16);
      expect(spyRectArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it(`should respond with a status code of 200
        and the payload value is triangle perimeter result
        of sideA, sideB, and base correctly`,
    async () => {
      // Arrange
      const sideA = 4;
      const sideB = 4;
      const base = 6;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTriPerimeter = jest.spyOn(figureCalculator,
          'calculateTrianglePerimeter');
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(14);
      expect(spyTriPerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET /triangle/area', () => {
    it(`should respond with a status code of 200
        and the payload value is triangle area result
        of base and height correctly`,
    async () => {
      // Arrange
      const base = 4;
      const height = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTriArea = jest.spyOn(figureCalculator,
          'calculateTriangleArea');
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(8);
      expect(spyTriArea).toBeCalledWith(base, height);
    });
  });
});
