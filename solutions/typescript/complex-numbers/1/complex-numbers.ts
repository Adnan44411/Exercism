export class ComplexNumber {
  constructor( private readonly _real: number,
    private readonly _imaginary: number) { 
  }
  public static  createComplex(real:number ,imaginary:number):ComplexNumber{
    return new ComplexNumber(real ,imaginary);
  }

  public get real(): number {
   return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
  return new ComplexNumber(this._real +other._real ,this._imaginary + other._imaginary )
  }

  public sub(other: ComplexNumber): ComplexNumber {
  return new ComplexNumber(this._real -other._real ,this._imaginary - other._imaginary )
  }

  public div(other: ComplexNumber): ComplexNumber {
  return new ComplexNumber(
(this._real*other.real  +  this._imaginary *other._imaginary)/(other._real*other._real +other._imaginary *other._imaginary),
(this._imaginary* other._real - this._real * other._imaginary )/(other._real*other._real +other._imaginary *other._imaginary));
  }

  public mul(other: ComplexNumber): ComplexNumber {
  return new ComplexNumber((this._real*other.real  -  this._imaginary *other._imaginary),
                           (this._imaginary* other._real +this._real * other._imaginary ));
  }

  public get abs(): number {
    // Math.sqrt(this._real*this._real ,this._imaginary*this._imaginary);
  return  Math.sqrt(this._real * this._real + this._imaginary * this._imaginary);

  }

  public get conj(): ComplexNumber {
     if (this._imaginary === 0) {
    return new ComplexNumber(this._real, 0);
  }

    return new ComplexNumber(this._real ,-this._imaginary);
  }

  public get exp(): ComplexNumber {
    const expReal = Math.exp(this._real);

  return new ComplexNumber(
    expReal * Math.cos(this._imaginary),
    expReal * Math.sin(this._imaginary)
    );
  }
}
