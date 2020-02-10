function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(5, 2));

// Pode associar um valor padrão para todos os parâmetros (ex: b)
function multiply2(a, b = 1) {
    return a * b;
}
console.log(multiply2(5, 0));
console.log(multiply2(5, undefined));
console.log(multiply2(2));

// Pode referenciar outros parâmetros
function multiply3(a, b = a) {
    return a * b;
}
console.log(multiply3(5));


// Lazy evaluation
// randon será chamada toda vez que multiply4 não possuir o segundo parâmetro
function randonNumber() {
    return Math.random() * 10;
}

function multiply4(a, b = randonNumber()) {
    return a * b;
}
console.log(multiply4(2));


