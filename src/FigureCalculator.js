class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  /**
   * Description placeholder
   * @date 9/16/2023 - 10:40:50 AM
   *
   * @param {...{}} args
   * @returns {*}
   */
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }


  /**
   * Description placeholder
   * @date 9/16/2023 - 10:41:00 AM
   *
   * @param {...{}} args
   * @returns {*}
   */
  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.multiply(length, width);
  }
  /**
   * Description placeholder
   * @date 9/16/2023 - 10:41:10 AM
   *
   * @param {...{}} args
   * @returns {*}
   */
  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('fungsi hanya menerima tiga parameter');
    }

    const [sideA, sideB, base] = args;

    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  /**
   * Description placeholder
   * @date 9/16/2023 - 10:41:18 AM
   *
   * @param {...{}} args
   * @return {*}
   */
  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [base, height] = args;

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
