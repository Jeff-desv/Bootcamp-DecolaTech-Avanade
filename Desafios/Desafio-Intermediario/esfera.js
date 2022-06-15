/*


Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.
Entrada

O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.
Saída

A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas após o ponto.
 
Exemplos de Entrada 	Exemplos de Saída

3
	

VOLUME = 113.097

15
	

VOLUME = 14137.155

1523
	

VOLUME = 14797486501.627
*/

//Resolução

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)


var raio = parseFloat(gets());
var PI = 3.14159;

var volumeEsfera = (4/3) * PI * Math.pow(raio, 3);

console.log("VOLUME = " + volumeEsfera.toFixed(3));