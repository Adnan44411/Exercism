
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {

    if(denominator===0){
      throw new Error("Denominator cannot be zero");
    }
    if(denominator<0){
      numerator=-numerator;
      denominator=-denominator;
    }
    const gcd =this.gcd(Math.abs(numerator),denominator);
    this.numerator = numerator/gcd;
    this.denominator = denominator/gcd;
  }
   private gcd(a: number, b: number): number {
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a || 1;
  
  }

  add(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator +
        r.numerator * this.denominator,
      this.denominator * r.denominator
    );
  }

  sub(r:Rational):Rational {
    return new Rational(
      this.numerator *r.denominator -r.numerator * this.denominator,
      this.denominator *r.denominator
    );
  }

  mul(r:Rational):Rational {
    return new Rational(
      this.numerator *r.numerator ,this.denominator *r.denominator
    )
  }

  div(r:Rational):Rational {
   return new Rational(
     this.numerator * r.denominator ,this.denominator *r.numerator
   )
  }

  abs():Rational {
    return new Rational(
      Math.abs(this.numerator),
      this.denominator
    )
  }

  exprational(power:number):Rational {
     if (power < 0) {
      if (this.numerator === 0) {
        throw new Error("Cannot raise zero to a negative power");
      }

      return new Rational(
        Math.pow(this.denominator, -power),
        Math.pow(this.numerator, -power)
      );
    }

    return new Rational(
       Math.pow(this.numerator,power),
      Math.pow(this.denominator,power)
    )
  }

  expreal(base:number):number {
    return  Math.pow(base,this.numerator/this.denominator);
  }
  // expnumber(base: number): number {
  //   return Math.pow(
  //     base,
  //     this.numerator / this.denominator
  //   );
  // }


  reduce() : Rational{
    return new Rational(this.numerator, this.denominator);
  }
}
