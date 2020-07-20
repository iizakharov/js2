const script = require('../js/script');
// const Button = new script.Button(container = '.cal');
// this.buttonClick = Button.buttonClick();
// this.equal = Button.equal();
// this.clear = Button.clear();
const calcSum = script.calcSum;
const calcSubtract = script.calcSubtract;
const calcMultiply = script.calcMultiply;
const calcDivide = script.calcDivide;


describe('Тест функци калькулятора' , ()  => {
    it('Операция сложение', function () {
        expect(calcSum(5, 4)).toBe(9);
    });
    it('Операция вычетание', function () {
        expect(calcSubtract(5, 4)).toBe(1);
    });
    it('Операция умножение', function () {
        expect(calcMultiply(5, 4)).toBe(20);
    });
    it('Операция деление', function () {
        expect(calcDivide(15, 5)).toBe(3);
    });

});

describe('Тест функци калькулятора c null аргументом' , ()  => {
    it('Операция сложение', function () {
        expect(calcSum(5, null)).toBe(5);
    });

    it('Операция вычетание', function () {
        expect(calcSubtract( null, 4)).toBe(-4);
    });
    it('Операция умножение', function () {
        expect(calcMultiply( 4, null)).toBe(0);
    });
    it('Операция деление на null', function () {
        expect(calcDivide( 5, null)).toBeTruthy();
    });
    it('Операция деление null на число', function () {
        expect(calcDivide(  null, 5)).toBe(0);
    });

});

describe('Тест функци калькулятора c попаданием строки' , ()  => {
    it('Операция сложение', function () {
        expect(calcSum(5, 'gdg')).toBe('5gdg');
    });

    it('Операция вычетание', function () {
        expect(calcSubtract( 'gdg', 4)).toBeNaN();
    });
    it('Операция умножение', function () {
        expect(calcMultiply( 4, 'gdg')).toBeNaN();
    });
    it('Операция деление на строку', function () {
        expect(calcDivide( 5, 'gdg')).toBeNaN();
    });
    it('Операция деление на строку', function () {
        expect(calcDivide( 'gdg', 5)).toBeNaN();
    });

});

describe('Тест функци калькулятора c undefined' , ()  => {
    it('Операция сложение', function () {
        expect(calcSum(5, undefined)).toBeNaN();
    });

    it('Операция вычетание', function () {
        expect(calcSubtract(5, undefined)).toBeNaN();
    });
    it('Операция умножение', function () {
        expect(calcMultiply(5, undefined)).toBeNaN();
    });
    it('Операция деление на строку', function () {
        expect(calcDivide(5, undefined)).toBeNaN();
    });

});