'use strict';

const Calculator = require('../../index');
const chai = require('chai').use(require('chai-spies'));
const dataProvider = require('../data/dataProvider.json');
const expect = chai.expect;

describe('tests methods [add] and [multiply] of Calculator.prototype ', () => {
    let calculator;
    describe('positive tests', () => {
        dataProvider.positive.forEach(element => {
            const data = element.data;
            let spyAdd, spyMultiply;

            beforeEach(() => {
                console.log('BeforeEach');
                calculator = new Calculator();
                //spyAdd = chai.spy.on(calculator, 'add');
                //spyMultiply = chai.spy.on(calculator, 'multiply');
            });

            afterEach(() => {
                console.log('After each');
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                console.log('It summation');
                spyAdd = chai.spy.on(calculator, 'add');
                const actualResult = calculator.add(...data);
                expect(spyAdd).to.be.a.spy;
                expect(spyAdd).to.have.been.called.once;
                expect(spyAdd).to.have.been.called.with(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.add);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                console.log('It multiplication');
                spyMultiply = chai.spy.on(calculator, 'multiply');
                const actualResult = calculator.multiply(...data);
                expect(spyMultiply).to.be.a.spy;
                expect(spyMultiply).to.have.been.called.once;
                expect(spyMultiply).to.have.been.called.with(...data);
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.multiply);
            });

        });
    });

    describe('negative tests', () => {
        dataProvider.negative.forEach(element => {
            const data = element.data;
            let spyAdd, spyMultiply;

            beforeEach(() => {
                calculator = new Calculator();
            });

            afterEach(() => {
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                spyAdd = chai.spy.on(calculator, 'add');
                const actualResult = () => calculator.add(...data);
                expect(spyAdd).to.be.a.spy;
                expect(actualResult).to.throw(TypeError);
                expect(spyAdd).to.have.been.called.once;
                expect(spyAdd).to.have.been.called.with(...data);
                expect(spyAdd).to.have.been.called;
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                spyMultiply = chai.spy.on(calculator, 'multiply');
                const actualResult = () => calculator.multiply(...data);
                expect(spyMultiply).to.be.a.spy;
                expect(actualResult).to.throw(TypeError);
                expect(spyMultiply).to.have.been.called.once;
                expect(spyMultiply).to.have.been.called.with(...data);
                expect(spyMultiply).to.have.been.called;
            });

        });
    });
});