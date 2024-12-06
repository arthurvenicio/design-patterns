import { Folder } from "../folder";
import { ISortingStrategy } from "../interfaces/isorting-strategy";

export class SortByModifiedDateStrategy implements ISortingStrategy {
  sort(folders: Folder[]): Folder[] {
    return folders.sort(
      (a, b) => a.modifiedAt.getTime() - b.modifiedAt.getTime()
    );
  }
}
