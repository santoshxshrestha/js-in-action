function main() {
  // let object = {
  //   mykey: "my value",
  //   anotherkey: 1234,
  // };
  //
  // console.log(object["anotherkey"]);
  let array = ["value1", "value2", "value3"];
  for (arrayIndex in array) {
    console.log(arrayIndex);
  }

  console.log("this here is the seperator for of and in the below is of");
  for (arrayIndex of array) {
    console.log(arrayIndex);
  }
}
// main();
// setInterval(main, 1000);
// setTimeout(main, 1000);
//
function hello() {
  function must(params) {
    return this.content + params;
  }

  let object = {
    content: "hello",
  };
  let array = [" world", " and hello", " you"];
  console.log(must.apply(object, array));
}

function binding_content() {
  const content = {
    name: "ChatGPT",
    greet: function () {
      return "Hello, " + this.name + "!";
    },
  };
  const unbound = content.greet;
  console.log(unbound());
}
function closure() {
  var content = {
    name: "santosh",
    greet() {
      return "Hello " + this.name + "!";
    },
  };
  console.log(content.greet());
}

closure();
