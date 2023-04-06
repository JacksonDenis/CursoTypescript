const fn = (nome: string, idade?: number) => {
    return `nome: ${nome}, idade: ${idade}`
}


console.log(fn("Jackson", 31));

console.log(fn("Jackson")); //idade retorna undefind
