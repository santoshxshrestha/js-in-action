let content;

let response =async ()=> {
    let res = await fetch("https://dog.ceo/api/breed/hound/list")
    const data = await res.json();
    content = data;
    console.log(content);
}
response();

