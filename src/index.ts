import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { VehicleTypeAnalyzer } from "./analyzers/VehicleTypeAnalayzer";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { Summary } from "./Summary";
import { HTMLReport } from "./reportTargets/htmlReport";

// Create an object that satisfies that 'DataReader' interface
// NOTE: This is commented out because we are using the 'MatchReader' class to read the CSV file
// const csvFileReader = new CSVFileReader("Electric_Vehicle_Population_Data.csv");

// Notice that we are not instantiating the CSVFileReader class directly
// We are using the 'fromCSV' method to create an instance of the 'MatchReader' class
// This is a static method that is part of the 'MatchReader' class
const matchReader = MatchReader.fromCSV("Electric_Vehicle_Population_Data.csv");
const summary = new Summary(new VehicleTypeAnalyzer("PHEV"), new HTMLReport());
//  Generate another report using the 'ConsoleReport' class
const summaryConsoleReport = new Summary(
  new VehicleTypeAnalyzer("PHEV"),
  new ConsoleReport()
);
matchReader.load();

summary.buildAndPrintReport(matchReader.matches);
summaryConsoleReport.buildAndPrintReport(matchReader.matches);
