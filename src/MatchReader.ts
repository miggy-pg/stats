import { yearToDate } from "./utils";
import { CarVehicles } from "./CarVehicles";
import { VehicleData } from "./VehicleData";
import { CSVFileReader } from "./CSVFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCSV(fileName: string): MatchReader {
    return new MatchReader(new CSVFileReader(fileName));
  }
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
