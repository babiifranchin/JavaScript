console.log(`Trabalhando com Listas`);
//Control + K + C atribui comentários separadamente à todas as linhas selecionadas
// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possívies:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //remover item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);