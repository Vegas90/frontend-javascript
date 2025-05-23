//create a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="crud.d.ts" />
import { RowID, RowElement } from '../interface';

//import everything from crud.ts as CRUD
import * as CRUD from "./crud";

//create an object called 'row' that implements RowElement with the filedsset to these values: firstname:Guillaume, lastName:Salva
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};  

//create a const variable named updatedRow with the type RowElement and update the row object with the age set to 23
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

//call the updateRow function and deleteRow commands
const rowId: RowID = CRUD.insertRow(row);
CRUD.updateRow(rowId, updatedRow);  
CRUD.deleteRow(rowId);

