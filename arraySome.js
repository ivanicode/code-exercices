const arr = [
    {id: 1, nazwisko: "tekst", wiek: 21}, 
    {id: 2, nazwisko: "numer", panienskie: "jakas", wiek: 35}, 
    {id: 3, nazwisko: "znak", panienskie: "jakas inna", wiek: 42}, 
    {id: 4, nazwisko: "cos", wiek: 29}
];

arr.some(element => element.wiek === 42);

//This method return Boolean value and if any of elements does not passed the test it will return 'false'

function age(element){
    return element.wiek === 42;
}
arr.some(age);
