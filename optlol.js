function optGen() {
    let otp = Math.round(Math.random()*10000).toString();

    if (otp.length == 4) {
        return otp;
    }else{
        return optGen();
    }
}

console.log(optGen())
