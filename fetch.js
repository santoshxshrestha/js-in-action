let content;

let response =async ()=> {
    let res = await fetch("https://dog.ceo/api/breed/hound/list")
    const data = await res.json();
    content = data;
    for (let n of content.message){
        if ( n === 'walker' ){
            console.log(`The index of walker is ${content.message.indexOf('walker')}`)
        }
    }
}
response();
fetch("https://dog.ceo/api/breed/hound/list").then((content)=> {
    console.log(content)
})

