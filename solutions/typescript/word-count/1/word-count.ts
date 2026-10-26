export function count(str :string) : Map<string , number >{
       
  let myMap = new Map<string, number>();

  let text=str.toLowerCase();

  const words = text.match(/[a-z0-9]+(?:'[a-z0-9]+)*/g) || [];

 for(const word of words){
   myMap.set(word,(myMap.get(word) || 0) +1);
 }

 return myMap;
  
}
