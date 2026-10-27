export function calculatePrimeFactors(inp :number) : number[] {

  let ans: Array<number> = [];

  for(let i=2;i<=inp;i++){
    if(inp%i===0){
      ans.push(i);
      inp=inp/i;
      i=1;
    }
  }

  return ans;
}
