'use strict';

const Calculator = require('../../index');
const chai = require('chai').use(require('chai-spies'));
const dataProvider = require('../data/dataProvider.json');
const expect = chai.expect;

describe('tests methods [add] and [multiply] of Calculator.prototype ', () => {
    let calculator, spyAdd, spyMultiply;

    beforeEach(() => {
        calculator = new Calculator();
        spyAdd = chai.spy.on(calculator, 'add');
        spyMultiply = chai.spy.on(calculator, 'multiply');
    });

    afterEach(() => {
        calculator = null;
    });

    describe('positive tests', () => {
        dataProvider.positive.forEach(element => {
            const data = element.data;

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                const actualResult = calculator.add(...data);
                /* eslint-disable*/
                expect(spyAdd).to.be.a.spy;
                expect(spyAdd).to.have.been.called.once;
                /* eslint-enable*/
                expect(spyAdd).to.have.been.called.with(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.add);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                const actualResult = calculator.multiply(...data);
                /* eslint-disable*/
                expect(spyMultiply).to.be.a.spy;
                expect(spyMultiply).to.have.been.called.once;
                /* eslint-enable*/
                expect(spyMultiply).to.have.been.called.with(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.multiply);
            });
        });
    });

    describe('negative tests', () => {
        dataProvider.negative.forEach(element => {
            const data = element.data;

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                const actualResult = () => calculator.add(...data);
                /* eslint-disable*/
                expect(spyAdd).to.be.a.spy;
                expect(actualResult).to.throw(TypeError);
                expect(spyAdd).to.have.been.called.once;
                /* eslint-enable*/
                expect(spyAdd).to.have.been.called.with(...data);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                const actualResult = () => calculator.multiply(...data);
                /* eslint-disable */
                expect(spyMultiply).to.be.a.spy;
                expect(actualResult).to.throw(TypeError);
                expect(spyMultiply).to.have.been.called.once;
                /* eslint-enable */
                expect(spyMultiply).to.have.been.called.with(...data);
            });
        });
    });
});