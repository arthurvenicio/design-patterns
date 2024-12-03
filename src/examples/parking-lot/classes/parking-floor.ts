import { ParkingSpotType } from "../enums/parking-spot-type-enum";
import { ParkingDisplayBoard } from "./parking-display-board";
import { ParkingSpot } from "./parking-spot";

export class ParkingFloor {
  private handiCapeedSpots: Map<number, any>;
  private compactSpots: Map<number, any>;
  private largeSpots: Map<number, any>;
  private motorbikeSpots: Map<number, any>;
  private electricSpots: Map<number, any>;
  private infoPortals: Map<string, any>;
  private freeHandicappedSpotCount: { free_spot: number };
  private freeCompactSpotCount: { free_spot: number };
  private freeLargeSpotCount: { free_spot: number };
  private freeMotorbikeSpotCount: { free_spot: number };
  private freeElectricSpotCount: { free_spot: number };
  private displayBoard: ParkingDisplayBoard;
  constructor(private name: string) {
    this.handiCapeedSpots = new Map();
    this.compactSpots = new Map();
    this.largeSpots = new Map();
    this.motorbikeSpots = new Map();
    this.electricSpots = new Map();
    this.infoPortals = new Map();
    this.freeHandicappedSpotCount = { free_spot: 0 };
    this.freeCompactSpotCount = { free_spot: 0 };
    this.freeLargeSpotCount = { free_spot: 0 };
    this.freeMotorbikeSpotCount = { free_spot: 0 };
    this.freeElectricSpotCount = { free_spot: 0 };
    this.displayBoard = new ParkingDisplayBoard();
  }

  addingParkingSpot(spot: ParkingSpot) {
    const switcher_map = {
      [ParkingSpotType.HANDICAPPED]: this.handiCapeedSpots.set(
        spot.getNumber(),
        spot
      ),
      [ParkingSpotType.COMPACT]: this.compactSpots.set(spot.getNumber(), spot),
      [ParkingSpotType.LARGE]: this.largeSpots.set(spot.getNumber(), spot),
      [ParkingSpotType.MOTORCYLE]: this.motorbikeSpots.set(
        spot.getNumber(),
        spot
      ),
      [ParkingSpotType.ELETRIC]: this.electricSpots.set(spot.getNumber(), spot)
    };

    if (!switcher_map[spot.getType()]) {
      console.log("Wrong spot type");
    }

    return switcher_map[spot.getType()];
  }
}
