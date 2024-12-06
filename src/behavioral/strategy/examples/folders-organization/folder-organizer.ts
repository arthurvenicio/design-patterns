import { Folder } from "./folder";
import { ISortingStrategy } from "./interfaces/isorting-strategy";
import { SortByNameStrategy } from "./strategies/sort-by-name-strategy";

export class FolderOrganizer {
  private sortingStrategy: ISortingStrategy;

  constructor() {
    // starting using sort by name strategy as default
    this.sortingStrategy = new SortByNameStrategy();
  }

  setSortingStrategy(strategy: ISortingStrategy) {
    this.sortingStrategy = strategy;
  }

  organize(folders: Folder[]) {
    return this.sortingStrategy.sort(folders);
  }
}
