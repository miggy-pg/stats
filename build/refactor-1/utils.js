"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearToDate = void 0;
const yearToDate = (year) => {
    // Example: 28/12/2020
    // datestring.split("/").map((value: string): number => {return parseInt(value);})
    return new Date(year, 0, 1);
};
exports.yearToDate = yearToDate;
