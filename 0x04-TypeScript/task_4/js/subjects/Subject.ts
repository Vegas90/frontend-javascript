//Subject class in the same namespace named subjects
//the class has one attribute teacher that implements the Teacher interface
//the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)

namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private _teacher: Teacher;

    constructor(teacher: Teacher) {
      this._teacher = teacher;
    }

    // Setter method for teacher
    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }
}
}
