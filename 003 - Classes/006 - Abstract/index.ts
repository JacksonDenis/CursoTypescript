abstract class Pessoa {
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

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;

}

class Jackson extends Pessoa {
    private _profissao: string = "Programador";

    constructor() {
        super("Jackson", 32);
    }

    public qualSuaProfissao() {
        return 'Sou Estagiario '
    }

    
    public get profissao() : string {
        return this._profissao
    }

    
    public set profissao(v : string) {
        this._profissao = v;
    }
    
    
}

const Jd = new Jackson();
console.log(Jd.profissao);

Jd.profissao = "Estagiario"

console.log(Jd.profissao);

