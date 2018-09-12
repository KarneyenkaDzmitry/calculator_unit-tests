'use strict';

class Calculator {

    constructor() {
        this.result = 0;
    }

    add() {
        this.result = 0;
        arguments.array.forEach(element => {
            result += element;
        });
        return result;
    }
    
    multiply() {
        this.result = 0;
        arguments.array.forEach(element => {
            result += element;
        });
        return result;
    }
}

module.exports = Calculator;