import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
  print(report: number[]): void {
    const html = `
      <div>
        <h1> PHEV and BEV Vehicle Type Analysis </h1>
        <div> PHEV: ${report[0]} </div>
        <div> BEV: ${report[1]} </div>
      </div>
    `;
    fs.writeFileSync("report.html", html);
  }
}
