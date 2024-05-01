import { VehicleData } from "./VehicleData";

export interface Analayzer {
  run(matches: VehicleData[]): number[];
}

export interface OutputTarget {
  print(report: number[]): void;
}

export class Summary {
  constructor(public analyzer: Analayzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(data: VehicleData[]): void {
    const output = this.analyzer.run(data);
    this.outputTarget.print(output);
  }
}
