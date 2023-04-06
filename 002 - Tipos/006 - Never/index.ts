const error = (): never => {
    throw new Error("Algo deu errado")
};


const loop = (): never => {
    while (true) {
        console.log("olá");
    }
}

const validade =  (value: string | number ) => {
    if (typeof value === "string") {
        return console.log("é um  string");        
    }else if (typeof value === "number"){
        return console.log("é um  number");  
    }

    console.log(error());
    
}