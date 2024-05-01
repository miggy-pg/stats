"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const VehicleTypeAnalayzer_1 = require("./analyzers/VehicleTypeAnalayzer");
const ConsoleReports_1 = require("./reportTargets/ConsoleReports");
const Summary_1 = require("./Summary");
const htmlReport_1 = require("./reportTargets/htmlReport");
// Create an object that satisfies that 'DataReader' interface
// NOTE: This is commented out because we are using the 'MatchReader' class to read the CSV file
// const csvFileReader = new CSVFileReader("Electric_Vehicle_Population_Data.csv");
// Notice that we are not instantiating the CSVFileReader class directly
// We are using the 'fromCSV' method to create an instance of the 'MatchReader' class
// This is a static method that is part of the 'MatchReader' class
const matchReader = MatchReader_1.MatchReader.fromCSV("Electric_Vehicle_Population_Data.csv");
const summary = new Summary_1.Summary(new VehicleTypeAnalayzer_1.VehicleTypeAnalyzer("PHEV"), new htmlReport_1.HTMLReport());
//  Generate another report using the 'ConsoleReport' class
const summaryConsoleReport = new Summary_1.Summary(new VehicleTypeAnalayzer_1.VehicleTypeAnalyzer("PHEV"), new ConsoleReports_1.ConsoleReport());
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
summaryConsoleReport.buildAndPrintReport(matchReader.matches);
