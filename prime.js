const checkPrime = (num) =>{
  if(num == 1 ){
     var res = console.log (`${num} is not a prime number or composite number`);
     return res;
  }
  else {
    for(let i = 2; i <= num ; i++){
        if( num % i == 0 ){
           var res = console.log(`${num} is not a prime number`);
           return res;
        }
        else {
            var res = console.log(`${num} is a prime number`);
            return res;
        }
    }
  }
}

checkPrime(2);

