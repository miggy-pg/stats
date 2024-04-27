export const yearToDate = (year: number): Date => {
  // Example: 28/12/2020
  // datestring.split("/").map((value: string): number => {return parseInt(value);})
  return new Date(year, 0, 1);
};
