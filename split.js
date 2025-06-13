let dash = "hello there - santosh"
let nodash = "hello there"
function splitting(string){
    let content = string.split("-")
    return content;
}

console.log(splitting(dash))
console.log(splitting(nodash))
console.log("-------------------------------")

let url = "https://images.dog.ceo/breeds/lundpenus/n02113799_2280.jpg"
function getname(url) {
    let name = url.split("/")[4]
    if (name.includes("-")){
        let splittedName = name.split("-");
        return splittedName[1] +" "+  splittedName[0]
    }else{
        return name;
    }
}

console.log(getname(url))