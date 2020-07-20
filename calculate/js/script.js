class Button{
    constructor(container = '.cal') {
        this.container = container;
        this.buttonClick();
        this.equal();
        this.clear();
        // this.keyPush();
    }

    buttonClick() {
        document.querySelector(this.container).addEventListener('click', e => {
            if (e.target.classList.contains('btn-number') || e.target.classList.contains('todo')) {
                let val = e.target.name;
                document.querySelector('.output').value = document.querySelector('.output').value + val;
            }
        });
    }

    equal() {
            document.querySelector('.result').addEventListener('click', () => {
                let expresion = document.querySelector('.output').value;

                if(expresion) {
                    document.querySelector('.output').value = eval(document.querySelector('.output').value);
                }
            });

    }

    clear() {
        document.querySelector('.ac').addEventListener('click', () => {
            document.querySelector('.output').value="";
        });
    }

    // keyPush() {
    //     document.addEventListener('keydown', function(event) {
    //         if (event.code == 'Enter' || 'NumpadEnter') {
    //             let expresion = document.querySelector('.output').value;
    //
    //             if(expresion) {
    //                 document.querySelector('.output').value = eval(document.querySelector('.output').value);
    //             }
    //         }
    //         if (event.code == 'Backspace') {
    //             document.querySelector('.AC').addEventListener('click', () => {
    //                 document.querySelector('.output').value="";
    //             });
    //         }
    //         if (event.code == 'NumpadSubtract' || 'NumpadAdd' || 'NumpadMultiply' || 'NumpadDivide'){
    //             let val = event.key;
    //             document.querySelector('.output').value = document.querySelector('.output').value + val;
    //         }
    //     });
    // }

}

new Button();

const check = (a, b) => {
    if (a === null || b === null) return null;
};
const calcSum = (a, b) => {
    check(a, b);
    let result = a + b;
    return result
};

const calcSubtract = (a, b) => {
    check(a, b);
    let result = a - b;
    return result
};
const calcMultiply = (a, b) => {
    check(a, b);
    let result = a * b;
    return result
};
const calcDivide = (a, b) => {
    check(a, b);
    let result = a / b;
    return result
};

module.exports = {
    check,
    calcSum,
    calcSubtract,
    calcMultiply,
    calcDivide
};