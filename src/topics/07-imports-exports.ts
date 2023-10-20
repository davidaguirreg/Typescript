import { Market, calculateTotalIR } from './06-function-destructuring';

const marketsSet: Market[] = [
    {
        name: 'Santa Maria',
        ruc: 52
    },
    {
        name: 'Favorita',
        ruc: 20
    }
];

const [total, tax] = calculateTotalIR({markets:marketsSet, tax:0.15});

console.log('Total =', total);
console.log('Tax =', tax);