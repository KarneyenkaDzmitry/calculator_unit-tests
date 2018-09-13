'use strict';

const Calculator = require('../../index');
const { expect } = require('chai');
const dataProvider = require('../data/dataProvider.json');

describe('tests methods [add] and [multiply] of Calculator.prototype ', () => {
    let calculator;
    describe('positive tests', () => {
        dataProvider.positive.forEach(element => {
            const data = element.data;

            beforeEach(() => {
                calculator = new Calculator();
            });

            afterEach(() => {
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                const actualResult = calculator.add(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.add);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                const actualResult = calculator.multiply(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.multiply);
            });

        });
    });

    describe('negative tests', () => {
        dataProvider.negative.forEach(element => {
            const data = element.data;

            beforeEach(() => {
                calculator = new Calculator();
            });

            afterEach(() => {
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                expect(calculator.add(...data)).to.throw(TypeError);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                expect(calculator.multiply(...data)).to.throw(TypeError);
            });

        });
    });
});