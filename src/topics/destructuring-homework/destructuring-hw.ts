interface Market{
    name: string;
    value: number;
}

interface Entrada{
    markets: Market[];
    tax:number
}


const santaMaria:Market = {
    name: "Santa Maria",
    value: 12.0
}
const tia:Market = {
    name: "Tia",
    value: 32.0
}

function calculateTotalIR(entradas: Entrada):[number,number]{
    let total=0;
    const {markets:conjuntoMarkets, tax:IRUpdated}=entradas;
    conjuntoMarkets.forEach(({value})=>{
        total+=value;
    });
    return [total, total*IRUpdated];
}


const impuestoRenta = 0.15;
const grupoMarkets = [tia, santaMaria];
const [total, impuesto, theOtherCase='Nothing Found']= calculateTotalIR({
    markets: grupoMarkets,
    tax: impuestoRenta
});
console.log('Total = ', total);
console.log('Impuesto = ', impuesto);

export{};