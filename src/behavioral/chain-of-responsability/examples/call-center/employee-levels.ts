export abstract class EmployeeLevel {
  constructor(
    public name: string,
    public nextLevel: EmployeeLevel | null = null
  ) {}

  isEqual(level: EmployeeLevel | null = null) {
    if (level !== null && level.name && this.name) {
      return true;
    }

    return false;
  }
}

export class Director extends EmployeeLevel {
  constructor() {
    super("Director");
  }
}

export class Manager extends EmployeeLevel {
  constructor() {
    super("Manager", new Director());
  }
}

export class Respondent extends EmployeeLevel {
  constructor() {
    super("Respondent", new Manager());
  }
}
