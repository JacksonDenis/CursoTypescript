class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O ${this.nome} comeu ${comida}` 
    }

    fezAniversario() {
        return `O ${this.nome} fez tantos anos ${++this.idade}`
    }
}

const pessoa1 = new Pessoa("Jackson Denis", 31); 
const pessoa2 = new Pessoa("Jackson Costa", 37); 

console.log(pessoa1.comer("Feijoada"));
console.log(pessoa2.fezAniversario());



console.log(pessoa1.nome);
