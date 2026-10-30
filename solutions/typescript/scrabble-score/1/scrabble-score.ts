export function score(strm:string):number {
  if(!strm){
    return 0;
  }

 const king: { [key: string]: number } = {
  "a": 1, "e": 1, "i": 1, "o": 1, "u": 1,
  "l": 1, "n": 1, "r": 1, "s": 1, "t": 1,

  "d": 2, "g": 2,

  "b": 3, "c": 3, "m": 3, "p": 3,

  "f": 4, "h": 4, "v": 4, "w": 4, "y": 4,

  "k": 5,

  "j": 8, "x": 8,

  "q": 10, "z": 10
};

  let ans=0;
  let str:string =strm.toLowerCase();
 for (let i=0 ;i<str.length;i++){
   // if(king.includes(str.charAt(i))){
     if (king[str.charAt(i)] !== undefined) {
    ans += king[str.charAt(i)];

    }
   }  
return ans;

}
