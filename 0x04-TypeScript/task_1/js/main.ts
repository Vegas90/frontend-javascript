// defined teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

//define the director intrface that extends the Teacher
interface Director extends Teacher {    
    numberOfReports: number; // additional property specific to Director
    }

//function that returns the formatted name: first initial + last name
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
// define a function type interface for printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string; 
}

//create a variable that implements the printTeacherFunction interface
const printTeacher1: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

// test the function
console.log(printTeacher1("John", "Doe")); // Output: "J. Doe"

//--------------wiritng a class -------------------

// Interface for constructor parameters
interface TeacherConstructor {
  firstName: string;
  lastName: string;
}

// Interface for class methods
interface Teacher {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements Teacher {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: TeacherConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
