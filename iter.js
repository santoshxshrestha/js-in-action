let string = "this is string";

for (let chars in string){
    console.log(chars)
}

for (let chars of string){
    console.log(chars)
}

let split = string.split(" ");

for(let words of split ) {
    console.log(words)
}
