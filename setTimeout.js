let string = "hello there"

let fn = function(variable) {
    setTimeout(() => {
        console.log(variable)
    }, 1000).await;
}

fn(string)
