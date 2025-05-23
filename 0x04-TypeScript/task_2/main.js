//------------class-------------------
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workOnHomework = function () {
        return "Getting to director tasks";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirector = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
//Create a class Teacher that will implement TeacherInterface
//workFromHome should return the string Cannot work from home
//getCoffeeBreak should return the string Cannot have a break
//workTeacherTasks should return the string Getting to work
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workfromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// function that returns either a Director or a Teacher
// It can return either a Director or a Teacher instance
//It accepts 1 arguments:
//salary(either number or string)
//if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
//function isDirector that accepts employee as argument and will be used as a type predicate and if the employee is a Director it will return true otherwise it will return false
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
//write a function name TeachClass that takes todayClass as an argument, return the string Teaching Math if todayClass is Math, it will return the string Teaching History if todayClass is History
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    return "";
}
