import { MatchReader } from "./MatchReader";
import { CarVehicles } from "./CarVehicles";
import { CSVFileReader } from "./CSVFileReader";

// e_vehicles.read();
// Create an object that satisfies that 'DataReader' interface
const csvFileReader = new CSVFileReader("Electric_Vehicle_Population_Data.csv");

// Create an instances of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let phev = 0;
let bev = 0;

// What are enums?
// Follows near-identical syntax to normal objects
// Creates an object with the same keys and values when converted from TS to JS
// Primary goal is to signal to other engineers that these are all closely related values
// Use when we have a small fixed set of values that are closely related and known at compile time

for (let car of matchReader.matches) {
  if (car[4]?.includes(CarVehicles.PHEVVehicleType)) {
    phev++;
  } else if (car[4]?.includes(CarVehicles.BEVVehicleType)) {
    bev++;
  }
}

console.log(`PHEV: ${phev}`);
console.log(`BEV: ${bev}`);
