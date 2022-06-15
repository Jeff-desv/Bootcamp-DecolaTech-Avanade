/*

Desafio

O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

    Conter 39 traços horizontais ( - ) na primeira linha;
    Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
    Repita o procedimento 2 quatro vezes;
    Repita o procedimento 1.

No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)
Entrada

Não há.
Saída

A saída será impresso conforme a figura acima.
 
Exemplo de Entrada 	Exemplo de Saída
  	

---------------------------------------

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

---------------------------------------

*/
//Resolução

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e 
//a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

print('---------------------------------------');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(let i = 0; i<5; i++){
  
  print("|     |");
}

print('---------------------------------------')