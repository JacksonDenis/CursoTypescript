class Pessoa {
    private nome: string = "";
    private idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`
    }

    protected fezAniversario() {
        return `O ${this.nome} fez tantos anos ${++this.idade}`
    }

}

const pessoa1 = new Pessoa("Jackson Denis", 31);
const pessoa2 = new Pessoa("Jackson Costa", 37);

console.log(pessoa1.comer("Feijoada"));

