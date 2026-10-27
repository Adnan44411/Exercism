
export function convert(inp :number ):string {

let  ans:string ="";

    if(inp % 3===0){
      ans+="Pling";
      // inp=inp/3;
    }
    if(inp % 5===0){
      ans+="Plang";
      // inp/=5;
    }
    if(inp % 7===0){
      ans+="Plong";
      // inp/=7;
    }
   if (ans === "") {
     return `${inp}`;
   }
    
  // }
  return ans;
  
}
