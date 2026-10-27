export class Gigasecond { 
  private static startDate: Date;

  constructor(startDate: Date) {
    Gigasecond.startDate = startDate; }

  public date(): Date {
  const gigasecond = 1_000_000_000 * 1000;

return new Date(Gigasecond.startDate.getTime() + gigasecond);

  } 
}