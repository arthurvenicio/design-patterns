import { Folder } from "../folder";
import { ISortingStrategy } from "../interfaces/isorting-strategy";

export class SortBySizeStrategy implements ISortingStrategy {
  sort(folders: Folder[]): Folder[] {
    return folders.sort((a, b) => a.size - b.size);
  }
}
