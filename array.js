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
