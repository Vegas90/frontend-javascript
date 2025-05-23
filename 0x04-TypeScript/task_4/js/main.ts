/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
    // Create and export one Teacher object cTeacher with experienceTeachingC = 10
    export const cTeacher: Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10
    };

    // Create and export constants for each subject
    export const cpp = new Cpp(cTeacher);
    export const java = new Java(cTeacher);
    export const react = new React(cTeacher);
}

// For Cpp subject
console.log("C++");
Subjects.cpp.teacher = Subjects.cTeacher;
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
Subjects.java.teacher = Subjects.cTeacher;
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// For React subject
console.log("React");
Subjects.react.teacher = Subjects.cTeacher;
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
