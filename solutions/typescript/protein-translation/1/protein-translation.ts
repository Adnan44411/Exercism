export function translate(str :string):string[]{
  
  let ans :string[]=[];
  const codons:{ [key:string]:string}={
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
  }

  const stopCodons = ["UAA", "UAG", "UGA"];

  for(let i=0; i<str.length ;i+=3){
    let codon=str.slice(i,i+3);
    if(stopCodons.includes(codon)){
      break;
    }
    if (codon.length !== 3 || !codons[codon]) {
      throw new Error("Invalid codon");
    }
    ans.push(codons[codon])
  }

  return ans;
}
