const array = ["hello", "this", "is", "an", "array"];
console.log(array[0] = "hi")
// array  =  ["this", "is","not","valid"]
console.log(array)

// but 
const freezed_array = Object.freeze(["this", "cant", "be", "modified"])
console.log(freezed_array)
// freezed_array[0].push("cant");

let to_pop = ["this ", "is ", "to ", "pop"];
console.log(to_pop)
to_pop.pop()
console.log(to_pop)
to_pop.push("another", "one")
console.log(to_pop)


let string = "santosh";
console.log(string)
let word = string[0] = "a";
console.log(word)


let original_array = [1,2,3,4,5];
let new_array = original_array.push([2,3,4,5,1,4,23,23]);
console.log(original_array)
console.log(new_array)


let variable = "hello there"
console.log(variable)
variable = "hi there"
console.log(variable)

let newarray = [100,2,1999,2,3,4];
console.log(newarray)
let sorted_array = newarray.sort((a,b)=> a-b);
console.log(sorted_array)
console.log("-------------------------------------------------------------------")

const arr = [1,2];
const another = arr.concat([1,23]);
console.log(arr)
console.log(another)

console.log("-------------------------------------------------------------------")
//this is in case of number
let a = 23;
let b = a ;
a = 432;
b = 234;
console.log(b)
console.log(a)

console.log("-------------------------------------------------------------------")
//this is in case of array
let c = [1,2,3];
let d = c;
c[0] = 5;
d[1] = 4
console.log(d)
console.log(c)

console.log("-------------------------------------------------------------------")
const santosh  = {
    name : "santsoh",
    langauge: ["Nepali", "hindi", "English"],
    programming_language: ["c", "cpp", "rust","js","html css tailwind","bash"],
    age: 20,
    pet: "Azure crane",
    text_editor: [ "vim", "nvim", "nano", "notepad", "vscode" ],
    hobbies: ["code", "game", "learn", "journal", "web", "linux"],
    vehicle : null,
    quote: function() {
        console.log("Do you know my name , it is ",this.name)
    },
}
console.log(santosh.programming_language.join("_"))
santosh.quote();

console.log("-------------------------------------------------------------------")

const dog = {
    name : "echo",
    talk: function(){
        console.log("woof woof")
    }
}
dog.talk();
console.log(typeof dog);
console.log(typeof dog.talk)
console.log(typeof dog.name)
