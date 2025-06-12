function long(fullname) {
     fullname = fullname.split(" ");
    let firstname = fullname[0];
    let lastname = fullname[1];

    if (firstname<lastname){
        return lastname;
    }else{ 
        return firstname;
    }
}

console.log(long('Santosh Shrestha'))

function isEmpty(array) {
    if (array.length === 0 ){
        return true; 
    }else{
        return false;
    }
}

console.log(isEmpty([0,42,42]));
