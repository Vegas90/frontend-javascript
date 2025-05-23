// 1. Define an interface called Student with four properties
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects using the Student interface
const student1: Student = {
  firstName: "Amos",
  lastName: "Mwoni",
  age: 25,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Mombasa"
};

// 3. Store both student objects in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table element using the DOM
const table = document.createElement("table");

// Add some styling directly (optional)
table.style.borderCollapse = "collapse";
table.style.width = "60%";
table.style.marginTop = "20px";

// ------------------ Create Table Header ------------------

// Create a table row for the header
const headerRow = document.createElement("tr");

// Create and style the "First Name" column header
const th1 = document.createElement("th");
th1.textContent = "First Name";
th1.style.border = "1px solid #ccc";
th1.style.padding = "8px";
th1.style.backgroundColor = "#f2f2f2";

// Create and style the "Location" column header
const th2 = document.createElement("th");
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
studentsList.forEach((student) => {
  // Create a new row for the current student
  const row = document.createElement("tr");

  // Create a cell for the student's first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid #ccc";
  firstNameCell.style.padding = "8px";

  // Create a cell for the student's location
  const locationCell = document.createElement("td");
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
