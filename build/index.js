"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CarVehicles_1 = require("./CarVehicles");
const CSVFileReader_1 = require("./CSVFileReader");
// e_vehicles.read();
// Create an object that satisfies that 'DataReader' interface
const csvFileReader = new CSVFileReader_1.CSVFileReader("Electric_Vehicle_Population_Data.csv");
// Create an instances of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let phev = 0;
let bev = 0;
// What are enums?
// Follows near-identical syntax to normal objects
// Creates an object with the same keys and values when converted from TS to JS
// Primary goal is to signal to other engineers that these are all closely related values
// Use when we have a small fixed set of values that are closely related and known at compile time
for (let car of matchReader.matches) {
    if ((_a = car[4]) === null || _a === void 0 ? void 0 : _a.includes(CarVehicles_1.CarVehicles.PHEVVehicleType)) {
        phev++;
    }
    else if ((_b = car[4]) === null || _b === void 0 ? void 0 : _b.includes(CarVehicles_1.CarVehicles.BEVVehicleType)) {
        bev++;
    }
}
console.log(`PHEV: ${phev}`);
console.log(`BEV: ${bev}`);
