"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(data) {
        const output = this.analyzer.run(data);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
