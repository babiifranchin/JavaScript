console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possívies:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}

//for(inicializacao; condicao; incremento){}
for(let i = 0; i < 3; i++){
    if (listaDeDestinos[i] == destino){
        destinoExiste = true;
    }

}


//Control + K + C atribui comentários separadamente à todas as linhas selecionadas
//Control + K + U para tirar comentários