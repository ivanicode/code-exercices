const arr = [
    {id: 1, nazwisko: "tekst", wiek: 21}, 
    {id: 2, nazwisko: "numer", panienskie: "jakas", wiek: 35}, 
    {id: 3, nazwisko: "znak", panienskie: "jakas inna", wiek: 42}, 
    {id: 4, nazwisko: "cos", wiek: 29}
];

arr.findIndex(element => element.id === 2);

//if there is no element in array that pass the test it will return '-1'

function index(element){
    return element.id === 2;
}

arr.findIndex(index);
