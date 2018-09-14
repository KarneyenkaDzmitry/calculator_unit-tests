'use strict';

const Calculator = require('../../index');
const chai = require('chai');
const spies = require('chai-spies'); 
const dataProvider = require('../data/dataProvider.json');
chai.use(spies);

const expect = chai.expect;

describe('tests methods [add] and [multiply] of Calculator.prototype ', () => {
    let calculator;
    describe('positive tests', () => {
        dataProvider.positive.forEach(element => {
            const data = element.data;
            let spyAdd, spyMultiply;

            beforeEach(() => {
                calculator = new Calculator();
                spyAdd = chai.spy(calculator.add);
                spyMultiply = chai.spy(calculator.multiply);
            });

            afterEach(() => {
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                const actualResult = calculator.add(...data);
                expect(spyAdd).to.have.been.called;
                expect(actualResult).to.be.a('Number');
                expect(actualResult).to.be.equal(element.result.add);
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                const actualResult = calculator.multiply(...data);
                expect(spyMultiply).to.have.been.called;
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
                spyAdd = chai.spy(calculator.add);
                spyMultiply = chai.spy(calculator.multiply);
            });

            afterEach(() => {
                calculator = null;
            });

            it(`the summation of [${element.data}] elements with result = [${element.result.add}]`, () => {
                const actualResult = () => calculator.multiply(...data);
                expect(actualResult).to.throw(TypeError);
                expect(spyAdd).to.have.been.called;
            });

            it(`the multiplication of [${element.data}] elements with result = [${element.result.multiply}]`, () => {
                const actualResult = () => calculator.multiply(...data);
                expect(actualResult).to.throw(TypeError);
                expect(spyMultiply).to.have.been.called;
            });

        });
    });
});