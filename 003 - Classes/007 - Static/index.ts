class Utils {
    static cloneObject (object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)))
    }
}

//const utils = new Utils()

const tenis1: {tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true,
};
const tenis2: {tamanho: number, estoque: boolean} = {
    tamanho: 36,
    estoque: true,
};

console.log(Utils.cloneObject([tenis1, tenis2]));

