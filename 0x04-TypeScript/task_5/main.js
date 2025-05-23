// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:
//create function named sumMajorCredits and sumMinorCredits in task_5/js/main.ts
//Each function takes two arguments subject1 and subject2
//sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
//Each function sums the credits of the two subjects
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "major" };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, brand: "minor" };
}
