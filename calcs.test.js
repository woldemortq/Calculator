const Calculator = require('./script');

test('adds 1 + 2 to equal 3', () => {
    const calc = new Calculator();
    calc.handleInput('1');
    calc.handleInput('+');
    calc.handleInput('2');
    calc.handleInput('=');
    expect(calc.getDisplay()).toBe('3');
});

test('subtracts 4 - 2 to equal 2', () => {
    const calc = new Calculator();
    calc.handleInput('4');
    calc.handleInput('-');
    calc.handleInput('2');
    calc.handleInput('=');
    expect(calc.getDisplay()).toBe('2');
});

test('multiplies 3 * 4 to equal 12', () => {
    const calc = new Calculator();
    calc.handleInput('3');
    calc.handleInput('x');
    calc.handleInput('4');
    calc.handleInput('=');
    expect(calc.getDisplay()).toBe('12');
});

test('divides 10 / 2 to equal 5', () => {
    const calc = new Calculator();
    calc.handleInput('1');
    calc.handleInput('0');
    calc.handleInput('/');
    calc.handleInput('2');
    calc.handleInput('=');
    expect(calc.getDisplay()).toBe('5');
});

test('division by zero should display "Error"', () => {
    const calc = new Calculator();
    calc.handleInput('1');
    calc.handleInput('0');
    calc.handleInput('/');
    calc.handleInput('0');
    calc.handleInput('=');
    expect(calc.getDisplay()).toBe('Error');
});
