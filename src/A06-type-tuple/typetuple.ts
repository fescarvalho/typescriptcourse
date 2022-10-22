const dadosClientes: readonly [number, string] = [1, 'Fernando'];
const dadosClientes1: [number, string, string] = [1, 'Fernando', 'Luiz'];
const dadosClientes2: [number, string, string?] = [1, 'Luiz'];
const dadosClientes3: [number, string, ...string[]] = [
  1,
  'Fernando',
  'Miranda',
];

console.log(dadosClientes);
console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
