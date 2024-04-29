import fs from "fs";
import { CSVFileReader } from "./CSVFileReader";
import { CarVehicles } from "./CarVehicles";

const e_vehicles = new CSVFileReader("Electric_Vehicle_Population_Data.csv");
e_vehicles.read();

let phev = 0;
let bev = 0;

// What are enums?
// Follows near-identical syntax to normal objects
// Creates an object with the same keys and values when converted from TS to JS
// Primary goal is to signal to other engineers that these are all closely related values
// Use when we have a small fixed set of values that are closely related and known at compile time

for (let car of e_vehicles.data) {
  if (car[4]?.includes(CarVehicles.PHEVVehicleType)) {
    phev++;
  } else if (car[4]?.includes(CarVehicles.BEVVehicleType)) {
    bev++;
  }
}

console.log(`PHEV: ${phev}`);
console.log(`BEV: ${bev}`);
