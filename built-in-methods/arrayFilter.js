const arr = [
    {id: 1, nazwisko: "tekst", wiek: 21}, 
    {id: 2, nazwisko: "numer", panienskie: "jakas", wiek: 35}, 
    {id: 3, nazwisko: "znak", panienskie: "jakas inna", wiek: 42}, 
    {id: 4, nazwisko: "cos", wiek: 29}
];

arr.filter((element) => element.id < 4)

//If no element pass the test, then an empty array will be returned = []

function smallerId(element){
    return element.id < 4;
}
arr.filter(smallerId);
