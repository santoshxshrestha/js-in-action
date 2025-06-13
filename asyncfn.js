async function fetchResponse(url){
    const response = await fetch(url);
    let {message} = await response.json();
    return await message;
}
async function main() {
    let url = "https://dog.ceo/api/breed/hound/list";
    let content  = await fetchResponse(url);
    console.log(content);
}
main();
