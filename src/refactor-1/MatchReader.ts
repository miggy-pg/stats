import { CSVFileReader } from "./CSVFileReader";
import { yearToDate } from "./utils";
import { CarVehicles } from "./CarVehicles";

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

export class MatchReader extends CSVFileReader<VehicleData> {
  mapRow(row: string[]): any {
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
  }
}
