import fs from "fs";

type Point = [number, number];

// City,Model Year,Make,Model,Electric Vehicle Type,Electric Range,DOL Vehicle ID,Vehicle Location
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
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .slice(1)
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
