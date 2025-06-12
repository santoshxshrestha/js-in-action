let array = [1,2,3,4,5,6,7,8,5,3]
for (n in array){
    console.log(`index of array is `,n)
}

for (n of array){
    
    console.log(`content of the array`, n)
}

let string = 'santosh is here'
let split = string.split(" ")
for (n of split){
    console.log(n)
}
