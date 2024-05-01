"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
class ConsoleReport {
    print(report) {
        console.log("PHEV: ", report[0]);
        console.log("BEV: ", report[1]);
    }
}
exports.ConsoleReport = ConsoleReport;
