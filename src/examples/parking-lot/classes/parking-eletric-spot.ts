import { ParkingSpotType } from "../enums/parking-spot-type-enum";
import { ParkingSpot } from "./parking-spot";

export class EletricSpot extends ParkingSpot {
  constructor(number: number) {
    super(number, ParkingSpotType.ELETRIC);
  }
}
