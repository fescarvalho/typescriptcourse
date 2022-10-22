export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpprecase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplyArgs(1, 2, 3));
console.log(concatStrings('F', 'E', 'R'));
console.log(toUpprecase('a', 'b', 'c'));
