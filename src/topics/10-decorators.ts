export function letUsDecorate<T extends {new (...args:any[]):{}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override function';
    }
}



@letUsDecorate
export class SuperClass{
    public myProperty: string = 'This is my string propertie';

    print(){
        console.log('Hey inside class');
    }
}

const newClass = new SuperClass();

console.log(newClass);