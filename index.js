// Code your solutions in this file

let array = ["Ada", "Brendan", "Ali"];
let string = "birthday"

function writeCards(array, string){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

function countDown(integer){
    while(integer >= 0){
        console.log(integer--)
    }
}