# calculator_unit-tests (Javascript ( Node.js))

The application show how testers have to write unit tests.<br>
There is calculator class in [index.js] than we need to coverage unit tests.<br>
It has two methods [add] - for summarising and [multiply] - for multiplication.<br>

### The application needs to have the following dependencies:

    npm --version 6.4.1
    node --version 8.11.4

## Deploy
$ npm install

Before start the program is supposed to run the command [npm install].<br>
It downloads needed modules and prepars the programm for start.<br>
There is a list of modules and their versions:

    chai: ^4.1.2
    chai-spies: ^1.0.0
    mocha: ^5.2.0
    mochawesome: ^3.0.3
    eslint: ^5.6.0
    nyc: ^13.1.0

## Structure 
### Folders:

- [test] - there are all files and folders connected with tests;
- [node_modules] - will be created after [npm install] command. There will be stored all additional modules;
- [reports] - will be created after the first run of [npm test] command. There will be stored all data that are need for report;
- [.nyc-output] - will be created after the first run of [npm test] command. There will be stored all data for [nyc] module.

### Files in root:

- [index.js] - main file in which you can find our Calculator class;
- [.eslintignore] - all folders and files that should not be indexed by [eslint] are listed here;
- [.eslintrc.js] - all rulles for [eslint] are placed there;
- [.gitignore] -  all folders and files that should not be indexed by [git] are listed here;
- [package.json] - includes all data for [npm]
- [README.md] - readme file with special information about the application and git-syntacs. 

## Usage

There are some scripts in [package.json] that helps us.<br>

* 1.[npm run linter] - check style and fix some marks in code. Afret have finished it write errors in console.
* 2.[npm test] - run tests and at the end print results of tests coverage the Calculator class.

### Author
#### Dzmitry_Karneyenka, Republic of Belarus, Minsk

## N.B.
### beforeEach
Don't put [beforeEach()] in [forEach], because [beforeEach()] multiply on array elements length<br>
that causes running [beforeEach()] block before every it equals array.length times.<br>
It is wrong way. It is better to place [beforeEach()] outside [forEach] but inside [describe] block.

### chai-spies
How to make checks with spy?<br>
 1.make spy: <br>
`const someSpy = chai.spies.on(object, 'nameOfMethod');`<br><br>
 2.use chai.expect for making assertion:<br>
`chai.expect(someSpy).to.have.been.called.with(data);`<br>
[see documentation](http://www.chaijs.com/plugins/chai-spies/)<br>

### chai method throw
How to make checks for Errors?<br>
- 1.Create new function that will include tested method that have to throw an Error with data.<br>
`e.g. const actualResult = () => calculator.add(data);`<br><br>
- 2.Send it into check's method. further steps it does itself.It makes listener, runs method and catches an Error.<br>
`e.g. chai.expect(actualResult).to.throw(TypeError);`<br>
[see documentation](https://www.chaijs.com/api/bdd/#method_throw)<br>

### Use spread operator - (...) for:
- 1.Sending arguments into method from array;<br>
`e.g. obj.functionName(...[a, b, c, d]) spread converts into obj.functionName(a, b, c, d) `<br><br>
- 2.making array from arguments in functions;<br>
`e.g. function Name(...arg). If we call the function as obj.Name(a, b, c, d), so arg will be an array [a, b, c, d]`<br>

