var sum1 = function(a, b) {
    return a + b;
};
console.log(sum1(6, 6))

// Arrow  functions
// São fçs anônimas
// Pode tirar a palavra function e a palavra return

var sum2 = (a, b) => a + b;
console.log(sum2(2, 4));

// Não esquecer das chaves
var sum3 = (a, b) => {
    var x = 10;
    if (a > b) {
        b = x;
    }
    return a + b;
}
console.log(sum3(6, 4));

// Se há apenas um argumento, pode ocultar os parênteses
var sum4 = a => a + 4;
console.log(sum4(2));

// Objetos literais com retorno implícito
var createObj = () => ({ teste: 123 });
console.log(createObj());

// Fç contrutora
function Car() {
    this.foo = 'bar'
}
console.log(new Car());

// Não é possível criar fç contrutora com arraow functions, tem muito a ver com o this

// Fç normais podem ser invocadas antes da declaração
log('Teste');
function log(value) {
    console.log(value);
}

//Usando Arrow functions, isso não é possível
// log2('HAHAHA') //comentado, pq não funciona (justificativa na linha de cima)
var log2 = value => {
    console.log(value);
}
/**
 * ERRO:
 * arrow_functions.js:46 Uncaught TypeError: log2 is not a function
    at arrow_functions.js:46
 */

 var obj = {
    showContext: function showContext() {
        this.log3('Log 3');
    },
    log3: function log3(value) {
        console.log(value);
    }
 };

 obj.showContext();


 var obj2 = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log4('After 1000ms')
        }, 1000);
    },
    log4: function log4(value) {
        console.log(value);
    }
 };

 obj2.showContext();