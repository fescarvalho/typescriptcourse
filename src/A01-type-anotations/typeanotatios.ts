/* eslint-disable */

//Tipos basicos (aqui ocorre inferencia de tipos)
let nome: string = 'Fernando'; // Qualquer tipo de strings
let idade: number = 28; // 10, 1.58,-5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer simbolo'); //symbol

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b', 'c'];
let arrayString2: string[] = ['a', 'b', 'c'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 28,
  nome: 'Fernando',
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}
//Ou
const soma2: (x: number, y: number) => number = (x, y) => x + y;
