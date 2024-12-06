import { Folder } from "./folders-organization/folder";
import { FolderOrganizer } from "./folders-organization/folder-organizer";
import { SortByModifiedDateStrategy } from "./folders-organization/strategies/sort-by-modified-date-strategy ";
import { SortBySizeStrategy } from "./folders-organization/strategies/sort-by-size-strategy";

const folders: Folder[] = [
  new Folder("Fotos do João", 13),
  new Folder("Fotos da Aguida", 2),
  new Folder("Fotos da Aguida2", 10),
  new Folder("Fotos da Aguida3", 3),
  new Folder("Fotos da Aguida4", 8),
  new Folder("Fotos da Aguida5", 7),
  new Folder("Fotos da Aguida7", 11)
];

const organizer = new FolderOrganizer();

console.log(organizer.organize(folders));

organizer.setSortingStrategy(new SortBySizeStrategy());

console.log();

console.log(organizer.organize(folders));

folders[3].modifiedAt = new Date();

organizer.setSortingStrategy(new SortByModifiedDateStrategy());

console.log();

console.log(organizer.organize(folders));
