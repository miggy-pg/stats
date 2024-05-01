import { CarVehicles } from "../CarVehicles";
import { Analayzer } from "../Summary";
import { VehicleData } from "../VehicleData";

export class VehicleTypeAnalyzer implements Analayzer {
  constructor(public vehicleType: string) {}

  run(matches: VehicleData[]): number[] {
    let phev = 0;
    let bev = 0;
    console.log("THIS: ", this.vehicleType);
    // What are enums?
    // Follows near-identical syntax to normal objects
    // Creates an object with the same keys and values when converted from TS to JS
    // Primary goal is to signal to other engineers that these are all closely related values
    // Use when we have a small fixed set of values that are closely related and known at compile time

    for (let car of matches) {
      if (car[4]?.includes(this.vehicleType)) {
        phev++;
      } else if (car[4]?.includes(CarVehicles.BEVVehicleType)) {
        bev++;
      }
    }
    return [phev, bev];
  }
}
