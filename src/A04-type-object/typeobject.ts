const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Valor1',
  keyB: 'Valor2',
  keyC: 'Valor3',
  keyD: 'Valor4',
};

objectA.keyA = 'Valor1';
