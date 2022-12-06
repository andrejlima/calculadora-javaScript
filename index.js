const display = document.querySelector('#display');
const funct = document.querySelector('#function');

let result;
let numb1;
let numb2;
let sinal;
const array1 = [];
const array2 = [];
let conta = 0;
let operations = 0;

function innerHT1() {
funct.innerHTML = `<button onclick="del1()" id="delete"></button>
    <button onclick="delAll()" id="delet-all"></button>
    <button onclick="soma()" id="soma"></button>
    <button onclick="minus()" id="minus"></button>
    <button onclick="mult()" id="mult"></button>
    <button onclick="division()" id="division"></button>
    <button onclick="equal()" id="result"></button>
    <button onclick="number1_1()" id="bt1"></button>
    <button onclick="number1_2()" id="bt2"></button>
    <button onclick="number1_3()" id="bt3"></button>
    <button onclick="number1_4()" id="bt4"></button>
    <button onclick="number1_5()" id="bt5"></button>
    <button onclick="number1_6()" id="bt6"></button>
    <button onclick="number1_7()" id="bt7"></button>
    <button onclick="number1_8()" id="bt8"></button>
    <button onclick="number1_9()" id="bt9"></button>
    <button onclick="number1_0()" id="bt0"></button>`
}

innerHT1();

function innerHT2() {
    funct.innerHTML = `<button onclick="del2()" id="delete"></button>
    <button onclick="delAll()" id="delet-all"></button>
    <button onclick="soma()" id="soma"></button>
    <button onclick="minus()" id="minus"></button>
    <button onclick="mult()" id="mult"></button>
    <button onclick="division()" id="division"></button>
    <button onclick="equal()" id="result"></button>
    <button onclick="number2_1()" id="bt1"></button>
    <button onclick="number2_2()" id="bt2"></button>
    <button onclick="number2_3()" id="bt3"></button>
    <button onclick="number2_4()" id="bt4"></button>
    <button onclick="number2_5()" id="bt5"></button>
    <button onclick="number2_6()" id="bt6"></button>
    <button onclick="number2_7()" id="bt7"></button>
    <button onclick="number2_8()" id="bt8"></button>
    <button onclick="number2_9()" id="bt9"></button>
    <button onclick="number2_0()" id="bt0"></button>`
}

function delAll() {
    innerHT1();
    document.location.reload(true);
    conta = 0;
}

function number1_1() {
    array1.push(1);
    display.innerHTML = `${array1.join('')}`;
};
function number1_2() {
    array1.push(2);
    display.innerHTML = `${array1.join('')}`;
};
function number1_3() {
    array1.push(3);
    display.innerHTML = `${array1.join('')}`;
};
function number1_4() {
    array1.push(4);
    display.innerHTML = `${array1.join('')}`;
};
function number1_5() {
    array1.push(5);
    display.innerHTML = `${array1.join('')}`;
};
function number1_6() {
    array1.push(6);
    display.innerHTML = `${array1.join('')}`;
};
function number1_7() {
    array1.push(7);
    display.innerHTML = `${array1.join('')}`;
};
function number1_8() {
    array1.push(8);
    display.innerHTML = `${array1.join('')}`;
};
function number1_9() {
    array1.push(9);
    display.innerHTML = `${array1.join('')}`;
};
function number1_0() {
    array1.push(0);
    display.innerHTML = `${array1.join('')}`;
};

function del1() {
    array1.pop();
    display.innerHTML = `${array1.join('')}`;
}

function soma() {
    sinal = '+';
    innerHT2();
    conta = conta + 1;
    if (conta > 1){
        equal();
    }
};

function mult() {
    sinal = 'x';
    innerHT2();
    conta = conta + 1;
    if (conta > 1){
        equal();
    }
};

function minus() {
    sinal = '-';
    innerHT2();
    conta = conta + 1;
    if (conta > 1){
        equal();
    }
};

function division() {
    sinal = '/';
    innerHT2();
    conta = conta + 1;
    if (conta > 1){
        equal();
    }
};

// -----------------------------------------------------------------------

function action(){
    if (sinal == '+') {
        result = (Number(array1.join('')) + Number(array2.join('')));
    }
    if (sinal == '-') {
        result = (Number(array1.join('')) - Number(array2.join('')));
    }
    if (sinal == 'x') {
        result = (Number(array1.join('')) * Number(array2.join('')));
    }
    if (sinal == '/') {
        result = (Number(array1.join('')) / Number(array2.join('')));
    }
}

function number2_1() {
    array2.push(1);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_2() {
    array2.push(2);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_3() {
    array2.push(3);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_4() {
    array2.push(4);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_5() {
    array2.push(5);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_6() {
    array2.push(6);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_7() {
    array2.push(7);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_8() {
    array2.push(8);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_9() {
    array2.push(9);
    display.innerHTML = `${array2.join('')}`;
    action();
};
function number2_0() {
    array2.push(0);
    display.innerHTML = `${array2.join('')}`;
    action();
};

function del2() {
    array2.pop();
    display.innerHTML = `${array2.join('')}`;
}

function equal() {
    display.innerHTML = `${result}`;
    while (array1.length > 0) {
        array1.pop();
    }
    while (array2.length > 0) {
        array2.pop();
    }
    conta = 0;
    operations = operations + 1;
    innerHT1();
}