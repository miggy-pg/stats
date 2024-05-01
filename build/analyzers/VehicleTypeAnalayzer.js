"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleTypeAnalyzer = void 0;
const CarVehicles_1 = require("../CarVehicles");
class VehicleTypeAnalyzer {
    constructor(vehicleType) {
        this.vehicleType = vehicleType;
    }
    run(matches) {
        var _a, _b;
        let phev = 0;
        let bev = 0;
        console.log("THIS: ", this.vehicleType);
        // What are enums?
        // Follows near-identical syntax to normal objects
        // Creates an object with the same keys and values when converted from TS to JS
        // Primary goal is to signal to other engineers that these are all closely related values
        // Use when we have a small fixed set of values that are closely related and known at compile time
        for (let car of matches) {
            if ((_a = car[4]) === null || _a === void 0 ? void 0 : _a.includes(this.vehicleType)) {
                phev++;
            }
            else if ((_b = car[4]) === null || _b === void 0 ? void 0 : _b.includes(CarVehicles_1.CarVehicles.BEVVehicleType)) {
                bev++;
            }
        }
        return [phev, bev];
    }
}
exports.VehicleTypeAnalyzer = VehicleTypeAnalyzer;
