"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .slice(1)
            .map((row) => {
            return row.split(",");
        })
            .map((row) => {
            var _a;
            const coordinates = (_a = row[7]) === null || _a === void 0 ? void 0 : _a.split(" ").map((value) => {
                return parseFloat(value);
            });
            return [
                row[0],
                (0, utils_1.yearToDate)(parseInt(row[1])),
                row[2],
                row[3],
                row[4],
                parseInt(row[5]),
                parseInt(row[6]),
                [coordinates[0], coordinates[1]],
            ];
        });
    }
}
exports.CSVFileReader = CSVFileReader;
