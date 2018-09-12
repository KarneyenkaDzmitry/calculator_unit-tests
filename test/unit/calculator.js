'use strict';

const Calculator = require('../../index');
const { expect } = require('chai');

describe('tests [add] method of Calculator.prototype ', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return [result of summ the first five numbers]', () => {
        const actualResult = calculator.add(1, 2, 3, 4, 5);
        expect(actualResult).to.be.a('Number');
        expect(actualResult).to.be.equal(15);
    });
});