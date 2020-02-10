// Jeito clássico de escrever objetos literais no JS
//Ex1
var obj = {
    pro1: 'Ana Garcia'
};
console.log(obj);

//Ex2: utilizando variável (VAR E PROP COM O MESMO NOME)
var prop2 = 'Ana B. Garcia';
var obj2 = {
    prop2: prop2
};
console.log(obj2);

//Ex3: com ES6, vc pode omitir o lado direito (VAR E PROP COM O MESMO NOME)
var prop3 = 'Ana Beatriz Garcia';
var obj3 = {
    prop3
};
console.log(obj3);

// Tbm funciona se usar fçs para constrir métodos
function method1() {
    console.log('Method called');
}
var obj4 = {
    method1
};
obj4.method1();

// Outra forma de fazer métodos
var obj5 = {
    sum: function sum(a, b) {
        return a + b;
    }
}
console.log(obj5.sum(5, 1));

// Exemplo de cima usando fç anônima
var obj6 = {
    sum: function (a, b) {
        return a + b;
    }
}
console.log(obj6.sum(5, 2));

// Outra forma
var obj7 = {
    sum2(a, b) {
        return a + b;
    }
}
console.log(obj7.sum2(2, 4));

//####################################
// ANTES
var propName = 'Teste';
var obj8 = {}; // PRECISAVA DECLARAR O OBJETO ANTES
obj8[propName] = 'Prop value';
console.log(obj8);

var propName2 = 'teste_';
var obj9 = {};
obj9[propName2 + 'concat'] = 'Prop value 2';
console.log(obj9);

//Com ES6
var propName3 = 'teste3_';
var obj10 = {
    [propName3 + 'concat']: 'Prop value 3'
};
console.log(obj10);