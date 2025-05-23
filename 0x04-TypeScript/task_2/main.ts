// defined teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Director extends Teacher {    
    numberOfReports: number; // additional property specific to Director
    }

interface DirectorInterface {
    workOnHomework(): string;
    getCoffeeBreak(): string;
    workDirector(): string;
}

interface TeacherInterface {
// methods
workfromHome(): string;
getCoffeeBreak():string;
workTeacherTasks():string; 
}

//------------class-------------------

class Director implements DirectorInterface {
    workOnHomework(): string {
        return "Getting to director tasks";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirector(): string {
        return "Getting to director tasks";
    }
}

//Create a class Teacher that will implement TeacherInterface
//workFromHome should return the string Cannot work from home
//getCoffeeBreak should return the string Cannot have a break
//workTeacherTasks should return the string Getting to work
class Teacher implements TeacherInterface {
    workfromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// function that returns either a Director or a Teacher
// It can return either a Director or a Teacher instance
//It accepts 1 arguments:
//salary(either number or string)
//if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

//function isDirector that accepts employee as argument and will be used as a type predicate and if the employee is a Director it will return true otherwise it will return false
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}   

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// string liteal type called Subjects allowing a variable to have the value Math or History only. 
type Subjects = "Math" | "History";

//write a function name TeachClass that takes todayClass as an argument, return the string Teaching Math if todayClass is Math, it will return the string Teaching History if todayClass is History
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
    return "";
}