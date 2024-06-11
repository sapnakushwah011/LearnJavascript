
tipper ('5');

function tipper(a){
    var bill = parseInt(a);
    console.log( bill + 5 );
}

// Function to find simple Interest

const simpleInterest = ( p, r, t) =>{
    var si = p * r * t/100;
    console.log(`The value of Simple Interest is ${si}`);
}

simpleInterest( 1000, 3, 2);


