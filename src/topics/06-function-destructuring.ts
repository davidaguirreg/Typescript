export interface Market{
    name: string;
    ruc: number;
}

interface Entrada{
    markets: Market[];
    tax:number
}


const santaMaria:Market = {
    name: "Santa Maria",
    ruc: 12.0
}
const tia:Market = {
    name: "Tia",
    ruc: 32.0
}

export function calculateTotalIR(entradas: Entrada):number[] {
    let total=0;
    entradas.markets.forEach(market=>{
        total+=market.ruc;
    })
    return [total, total*entradas.tax];
}


const impuestoRenta = 0.15;
const grupoMarkets = [tia, santaMaria];
const resultado = calculateTotalIR({
    markets: grupoMarkets,
    tax: impuestoRenta
});
console.log('Total = ', resultado[0]);
console.log('Impuesto = ', resultado[1]);

