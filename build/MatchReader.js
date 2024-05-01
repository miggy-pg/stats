"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CSVFileReader_1 = require("./CSVFileReader");
class MatchReader {
    static fromCSV(fileName) {
        return new MatchReader(new CSVFileReader_1.CSVFileReader(fileName));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read(); // get the CSV file data and parse it into 2D array
        this.matches = this.reader.data.map((row) => {
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
                coordinates && [coordinates[0], coordinates[1]],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
