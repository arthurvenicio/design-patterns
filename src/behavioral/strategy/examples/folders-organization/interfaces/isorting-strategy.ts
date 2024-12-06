import { Folder } from "../folder";

export interface ISortingStrategy {
  sort(folders: Folder[]): Folder[];
}
