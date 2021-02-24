console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possívies:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //remover item
// } else if (estaAcompanhada) {//a pessoa é menor de idade
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //remover item
// } else {
//     console.log("Nao é maior de idade e nao posso vender");
// }
//alt + shift + F para formatar

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1); //remover item
} else {
    console.log("Nao é maior de idade e nao posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){ 
    console.log("Boa Viagem");
}else{
    console.log("Voce nao pode embarcar");
}

console.log(listaDeDestinos);

//Control + K + C atribui comentários separadamente à todas as linhas selecionadas
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
//Control + K + U para tirar comentários