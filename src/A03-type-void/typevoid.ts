function notReturn(...args: string[]): void {
  console.log(args.join(' '));
}

notReturn('Fernando', 'Carvalho');

const pessoa2 = {
  nome: 'Fernando',
  sobrenome: 'Carvalho',
  displayName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa2.displayName();
