const arr = [
    {id: 1, nazwisko: "tekst", wiek: 21}, 
    {id: 2, nazwisko: "numer", panienskie: "jakas", wiek: 35}, 
    {id: 3, nazwisko: "znak", panienskie: "jakas inna", wiek: 42}, 
    {id: 4, nazwisko: "cos", wiek: 29}
];

arr.find(element => element.nazwisko === "tekst");

//If none of elements pass the test, then function will return 'undefined'

function name(element){
    return element.nazwisko === "tekst";
}

arr.find(name)