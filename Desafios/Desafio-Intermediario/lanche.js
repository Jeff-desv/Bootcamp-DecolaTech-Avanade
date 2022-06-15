/*


Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada

O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.
Saída

O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
 
Exemplo de Entrada 	Exemplo de Saída

3 2
	

Total: R$ 10.00

4 3
	

Total: R$ 6.00

2 3
	

Total: R$ 13.50
*/

//Resolução

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar



//TODO: Complete os espaços em branco com uma possível solução para o desafio
//OBS:  No javascript a casa decimal é definida por ponto. Exemplo: 1.50

let [X,Y] = gets().split(" ")
var price = 0;

const snackPrice = {
  1: 4.00,
  2: 4.50,
  3: 5.00,
  4: 2.00,
  5: 1.50
}

const valorLanche = () => {
  for (var [key, value] of Object.entries(snackPrice)) {
    if (X.toString() == key) {
      price = parseFloat(value)
      break
    }
  }
  return price * Y
}

print("Total: R$ " + valorLanche().toFixed(2));