/* Aluna - Alessandra Silva Lopes
Exercício - 11.06.2021 - Playground - //Micro desafio "Lista de Compras" - Criar uma lista de 
produtos para compra e aplicar nela os métodos join(), pop(), push(), shift() e unshift();
explicar com minhas próprias palavras o que cada função destas executa. */

let lista = ['manteiga', 'ovos', 'chocolate em pó', 'chá mate', 'sabão em pó'];

// o método .join() converte os elementos de um array em string, os concatena e retorna essa string resultante.
let listaJoin = lista.join(); // manteiga,ovos,chocolate em pó,chá mate,sabão em pó
console.log(listaJoin);      
// o separador padrão é a vírgula, mas pode-se escolher outras strings separadoras
let listaJoinSeparador = lista.join(" & ");// manteiga / ovos / chocolate em pó / chá mate / sabão em pó
console.log(listaJoinSeparador);

/*o método .pop() exclui o último elemento do array, decrementa o seu comprimento,
e retorna o valor removido */
let ultimoProduto = lista.pop();
console.log(lista); // [ 'manteiga', 'ovos', 'chocolate em pó', 'chá mate' ]
console.log(ultimoProduto); // sabão em pó

// o método .push() adiciona um ou mais elementos ao final de um array e retorna seu novo comprimento.
console.log(lista); //[ 'manteiga', 'ovos', 'chocolate em pó', 'chá mate' ]
lista.push("detergente"); 
console.log(lista); // [ 'manteiga', 'ovos', 'chocolate em pó', 'chá mate', 'detergente' ]

/* o método .shift() remove e retorna o primeiro elemento do array e desloca todos os elementos 
restantes uma posição para baixo, ocupando a primeira posição que ficara vaga. */
console.log(lista); //[ 'manteiga', 'ovos', 'chocolate em pó', 'chá mate', 'detergente' ]
let primeiroProduto = lista.shift();
console.log(lista); // [ 'ovos', 'chocolate em pó', 'chá mate', 'detergente' ]
console.log(primeiroProduto); //manteiga

/* O método .unshift() adiciona um ou mais elementos no início do array, deslocando os outros elementos 
para posições com índices mais altos, criando espaço para o(s) novo(s) elementos inseridos no início, e 
retorna o novo comprimento do array. */ 
console.log(lista); //[ 'ovos', 'chocolate em pó', 'chá mate', 'detergente' ]
lista.unshift("xampú");
console.log(lista); //[ 'xampú', 'ovos', 'chocolate em pó', 'chá mate', 'detergente' ]