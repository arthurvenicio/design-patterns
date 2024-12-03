import { ParkingSpotType } from "../enums/parking-spot-type-enum";
import { Vehicle } from "./vehicle";

export class ParkingSpot {
  private free: boolean = false;
  private vehicle: Vehicle | null = null;
  constructor(
    private number: number,
    private parkingSpotType: ParkingSpotType
  ) {}

  isFree(): Boolean {
    return this.free;
  }

  assingVehicle(vehicle: Vehicle) {
    this.vehicle = vehicle;
    this.free = false;
  }

  removeVehicle() {
    this.vehicle = null;
    this.free = true;
  }

  getNumber() {
    return this.number;
  }
  getType() {
    return this.parkingSpotType;
  }
}
