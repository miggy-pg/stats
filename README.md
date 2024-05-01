## How our project started:

```javascript
npm i nodemon --save-dev concurrently
tsc --init
Setup outdir and rootdir in tsconfig.json
Setup package.json 'scripts', the goal is to only use a single command to run 'concurrently' and 'nodemon'

```

### Using 'Generics' to reference a reusable data type

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

```javascript
// TypeOfData (a Generic example) is an argument similar to a function argument, so when we pass an argument to HoldAnything
// it will be passed as an argument(line 25) which is of type 'number'
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdstring = new HoldString<string>();
holdString.data = 'abcdfeg'

```

## Inheritance vs Composition

### Inheritance

- Characterized by an 'is a' relationship bertween two classes (so in our image below, MatchReader is a CsvFileReader because all the properties of the parent class 'CsvFileReader' also belongs to 'MatchReader')
- the idea is we have a 'parent' class that contains the core functionality and extend the class to a 'child' class and customized the behavior
  ![](images/inheritance.png)

### Composition

- Characterized by a 'has a' relationship between two classes (so in our image below, MatchReader 'has a' relationship to CsvFileReader and ApiReader)
- in our example, we are referencing a class(MatchReader using interface 'DataReader') and any classes that will use 'MatchReader' should follow these structure
- in our example, we delegated the actual reading of data to outside classes(CSVFileReader). In this part, we can structure our data in a separate class(for example 'read' function) as long as it follows the structure mentioned in the other class(CSVFileReader) and we can also restructure how the data is prepared in the other class(for example, class APIReader 'read' function) but still returns the same format. This is possible since this is referenced in our "inference" property so we can easily swap the 'read' function
  ![](images/composition.png)

## More Inheritance vs Composition Example

#### Inheritance

![](images/inheritance_example_1.png)

#### Composition

![](images/composition_example_1.png)

### Refactoring index.ts

![](images/refactor_index.png)

- we will have a class 'Summary' that will reference to 'Analyzer' interface in the analyzer property.
- we will also have a outputTarget property that will reference to 'OutputTarget' interface

### Summary

- We created an **enum**(CarVehicle.ts) that will present the values that are closely related, this only gives developers/engineers that these are the fields
- We created a **tuple**(VehicleData.ts) that presents the structure of our row but we did this manually
- We used **generics**(refactor-1/MatchReader.ts) to configure that type definition defined in our class(see that we extends our class to CSVFileReader<VehicleData>)
- We used **composition**(MatchReader.ts -> **interface DataReader**) is delegated to load the actual loading of data from outside (API, CSV file, etc)
