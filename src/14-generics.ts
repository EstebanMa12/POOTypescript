// You can use generics in functions to infer types based on what you call your function with.
// Function to get value of any type
function getValue<myType>(value: myType){
  // Return the value as is
  return value;
  // Type safety for any returned value
}
getValue(12).toPrecision();
getValue("12").toUpperCase();
getValue(true).valueOf();

