

// create class
export class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
  public getFullName = (): string => {
    return this.fullName;
  };

  public getFirstAndLastName = () : string => {
    return `${this.firstName} ${this.lastName}`;
  }
}

