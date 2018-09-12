'use strict';

const calculator = new (require('../../index'))();

describe('The first test', () => {
    it('the first it', () => {
        console.log(calculator.add(1, 2, 3, 4, 5));
    });
});