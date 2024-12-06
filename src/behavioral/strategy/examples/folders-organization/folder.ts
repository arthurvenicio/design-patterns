export class Folder {
  /**
   * @param {string} name the folder name
   * @param {number} size the folder size
   */

  constructor(
    private name: string,
    public size: number,
    public createdAt: Date = new Date(),
    public modifiedAt: Date = new Date()
  ) {}

  rename(name: string) {
    this.name = name;
    this.modifiedAt = new Date();
  }

  getName() {
    return this.name;
  }
}
