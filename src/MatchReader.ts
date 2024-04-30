import { yearToDate } from "./utils";
import { CarVehicles } from "./CarVehicles";

type Point = [number, number];

type VehicleData = [
  string,
  Date,
  string,
  string,
  string,
  number,
  number,
  Point
];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: VehicleData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read(); // get the CSV file data and parse it into 2D array
    this.matches = this.reader.data.map((row: string[]): VehicleData => {
      const coordinates = row[7]?.split(" ").map((value: string): number => {
        return parseFloat(value);
      });

      return [
        row[0],
        yearToDate(parseInt(row[1])),
        row[2],
        row[3],
        row[4] as CarVehicles,
        parseInt(row[5]),
        parseInt(row[6]),
        coordinates && [coordinates[0], coordinates[1]],
      ];
    });
  }
}
