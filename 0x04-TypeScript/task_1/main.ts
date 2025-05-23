interface Teacher {
  readonly firstName: string;           // Cannot be modified after creation
  readonly lastName: string;            // Cannot be modified after creation
  fullTimeEmployee: boolean;            // Must be provided
  location: string;                     // Must be provided
  yearsOfExperience?: number;           // Optional
  [key: string]: string | boolean | number | undefined; // Allows additional properties
}

const teacher1: Teacher = {
  firstName: "Amos",
  lastName: "Mwoni",
  fullTimeEmployee: true,
  location: "Nairobi",
  contract: false // additional property not explicitly defined in the interface
};

console.log(teacher1.firstName); // Amos
