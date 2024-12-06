import { Folder } from "../folder";
import { ISortingStrategy } from "../interfaces/isorting-strategy";

export class SortByCreateDateStrategy implements ISortingStrategy {
  sort(folders: Folder[]): Folder[] {
    return folders.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    );
  }
}
