export class Matrix {
  private matrixRows:number[][];
  constructor(matrixString:string) {
    this.matrixRows=matrixString.trim().split("\n").map((row)=>row.trim().split(/\s+/).map(Number));
  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): unknown {
    return this.matrixRows[0].map((_,colIndex)=>
      this.matrixRows.map((row)=> row[colIndex])
     );
  }
}

