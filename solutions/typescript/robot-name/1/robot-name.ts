export class Robot {

  private robotName: string;
  private static usedNames: Set<string> = new Set();

  constructor() {
    this.robotName = this.generateName();
  }

  private generateName(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let result = '';

    do {
      result = '';

      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
      }

      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers[randomIndex];
      }
    } while (Robot.usedNames.has(result));

    Robot.usedNames.add(result);

    return result;
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    // Robot.usedNames.delete(this.robotName);
    this.robotName = this.generateName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}

