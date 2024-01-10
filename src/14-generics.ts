// You can use generics in functions to infer types based on what you call your function with.

function getValue<myType>(value: myType){
    return value;
}
getValue(12).toPrecision();
getValue("12").toUpperCase();
getValue(true).valueOf();

