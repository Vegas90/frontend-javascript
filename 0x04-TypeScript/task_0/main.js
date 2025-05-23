// 2. Create two student objects using the Student interface
var student1 = {
    firstName: "Amos",
    lastName: "Mwoni",
    age: 25,
    location: "Nairobi"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Mombasa"
};
// 3. Store both student objects in an array
var studentsList = [student1, student2];
// 4. Create a table element using the DOM
var table = document.createElement("table");
// Add some styling directly (optional)
table.style.borderCollapse = "collapse";
table.style.width = "60%";
table.style.marginTop = "20px";
// ------------------ Create Table Header ------------------
// Create a table row for the header
var headerRow = document.createElement("tr");
// Create and style the "First Name" column header
var th1 = document.createElement("th");
th1.textContent = "First Name";
th1.style.border = "1px solid #ccc";
th1.style.padding = "8px";
th1.style.backgroundColor = "#f2f2f2";
// Create and style the "Location" column header
var th2 = document.createElement("th");
th2.textContent = "Location";
th2.style.border = "1px solid #ccc";
th2.style.padding = "8px";
th2.style.backgroundColor = "#f2f2f2";
// Add headers to the header row
headerRow.appendChild(th1);
headerRow.appendChild(th2);
// Add the header row to the table
table.appendChild(headerRow);
// ------------------ Add Student Rows ------------------
// Loop through each student in the list
studentsList.forEach(function (student) {
    // Create a new row for the current student
    var row = document.createElement("tr");
    // Create a cell for the student's first name
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid #ccc";
    firstNameCell.style.padding = "8px";
    // Create a cell for the student's location
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #ccc";
    locationCell.style.padding = "8px";
    // Add both cells to the current row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    // Add the completed row to the table
    table.appendChild(row);
});
// 5. Add the table to the webpage by appending it to the body
document.body.appendChild(table);
