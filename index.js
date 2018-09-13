'use strict';

class Calculator {

    constructor() {
        this.result = 0;
    }
    check(array) {
        const nan = array.find((element)=>!this.isNumber(element));
        if (typeof nan !== 'undefined') throw new TypeError(`Was entered wrong parameter [${nan}] that isn't a number`);
    }

    isNumber(element) {
        return typeof element === 'number' ? true : false;
    }

    add(...args) {
        this.check(args);
        this.result = 0;
        args.forEach(element => {
            this.result += element;
        });
        return this.result;
    }

    multiply(...args) {
        this.check(args);
        this.result = 1;
        args.forEach(element => {
            this.result *= element;
        });
        return this.result;
    }
}

module.exports = Calculator;