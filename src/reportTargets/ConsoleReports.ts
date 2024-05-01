import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  print(report: number[]): void {
    console.log("PHEV: ", report[0]);
    console.log("BEV: ", report[1]);
  }
}
