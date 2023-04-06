interface Ipessoa {
    nome: string,
    idade: number;
    readonly cpf: number
}


let pessoa: Ipessoa = { nome: "Dener" , idade:31, cpf: 11111}


class Joao implements Ipessoa {
    nome: string =  "Jackson";
    idade: number =  22
    readonly cpf: number = 222222
}