import { Folder } from "../folder";
import { ISortingStrategy } from "../interfaces/isorting-strategy";

export class SortByNameStrategy implements ISortingStrategy {
  sort(folders: Folder[]): Folder[] {
    return folders.sort((a, b) => a.getName().localeCompare(a.getName()));
  }
}
