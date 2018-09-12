'use strict';

class Calculator {

    constructor() {
        this.result = 0;
    }

    add(...args) {
        this.result = 0;
        args.forEach(element => {
            this.result += element;
        });
        return this.result;
    }

    multiply(...args) {
        this.result = 0;
        args.forEach(element => {
            this.result *= element;
        });
        return this.result;
    }
}

module.exports = Calculator;