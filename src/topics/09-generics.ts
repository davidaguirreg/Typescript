
//Generics let infer the type of return of a function
//Generics by convention is T
export function learningGenerics<T>(input:T):T{
    return input;
}

let returnNumber = learningGenerics<number>(3);
let returnString = learningGenerics<string>('Start generics now');
let returnArray = learningGenerics<number[]>([1,2,3]);


console.log('Number =', returnNumber.toString());
console.log('String =',returnString.split(' '));
console.log(returnArray.join('-'));
