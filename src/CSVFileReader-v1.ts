import fs from "fs";
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

export class CSVFileReader {
  data: VehicleData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .slice(1)
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): VehicleData => {
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
          [coordinates[0], coordinates[1]],
        ];
      });
  }
}
// City,Model Year,Make,Model,Electric Vehicle Type,Electric Range,DOL Vehicle ID,Vehicle Location
