"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HTMLReport {
    print(report) {
        const html = `
      <div>
        <h1> PHEV and BEV Vehicle Type Analysis </h1>
        <div> PHEV: ${report[0]} </div>
        <div> BEV: ${report[1]} </div>
      </div>
    `;
        fs_1.default.writeFileSync("report.html", html);
    }
}
exports.HTMLReport = HTMLReport;
