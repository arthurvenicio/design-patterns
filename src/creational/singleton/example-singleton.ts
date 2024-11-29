export class ExampleSingleton {
  static instance: ExampleSingleton | null = null;
  private nums: number[] = [];
  private constructor() {}

  public static getInstance(): ExampleSingleton {
    if (this.instance === null) {
      this.instance = new ExampleSingleton();
    }

    return this.instance;
  }

  bazinga(str: string) {
    console.log(`Bazingaaa : ${str}`);
  }

  setNum(num: number) {
    this.nums.push(num);
  }

  bazingaIterator() {
    for (const num of this.nums) {
      console.log(num);
    }
  }
}
