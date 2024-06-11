const factorial = (n) => {
  let ans = 1;

  if( n === 0)
   return 1;
   for(let i = 2; i <= n; i++)
   ans= ans * i ;
   return ans;
}

var result = factorial(5);

console.log(result);

