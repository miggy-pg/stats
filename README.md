## How our project started:

```javascript
npm i nodemon --save-dev concurrently
tsc --init
Setup outdir and rootdir in tsconfig.json
Setup package.json 'scripts', should only use a single command to use 'concurrently' and 'nodemon'

```

### Using 'Generics' to reference a reusable data type

- Like function arguments, but for types in calass/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

```javascript
// TypeOfData is an argument similar to a function argument, so when we pass an argument to HoldAnything
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
- in our example, we delegated the actual reading of data to outside classes(CSVFileReader)
  ![](images/composition.png)
