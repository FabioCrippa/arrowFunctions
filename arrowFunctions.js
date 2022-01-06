ESTRUTURA

let nomeVariavel = ()=> {
    console.log();
}
//fora das chaves executa a funcao
nomeVariavel();

//Outro modo de estrutura, apenas para 1 linha
let nomeVariavel = ()=> console.log();
nomeVariavel();

//Outro modo de estrutura, apenas para 1 parametro
let nomeVariavel = //sem parenteses => console.log();
nomeVariavel(adicionar parametro);


//comparando function e arrow function

//function convencional
function somar(a, b) {
    return a + b
}

//arrow function
let somar = (a, b) => a + b;