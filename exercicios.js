//estrutura arrow function
//let nomeVariavel = (a, b...) => {return a + b} console.log(nomeVariavel(valorA, valorB))
let somar = (a, b)=> {
    return a + b;
}
console.log(somar(10, 30));

let multiplicar = (a, b) => {
    return a * b;
}
console.log(multiplicar(2, 100));

let dividir = (a, b) => {
    return a / b;
}
console.log(dividir(100, 2));

let subtrair = (a, b) => {
    return a - b;
}
console.log(subtrair(100, 10));

//outro modo de arrow function
//let nomeVariavel = ()=>console.log();
//nomeVariavel();

let somar = (a, b)=>console.log(a + b);
somar(10, 50);

//outro modo de arrow function
//let nomeVariavel = console.log();
//nomevariavel()
//apenas para 1 parametro

let soma = console.log();
soma();

//function convencional
function adicao(a, b) {
     return a + b;
}
console.log(adicao(500, 1000));
