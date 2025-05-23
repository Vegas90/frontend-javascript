"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import everything from crud.ts as CRUD
var CRUD = require("./crud");
//create an object called 'row' that implements RowElement with the filedsset to these values: firstname:Guillaume, lastName:Salva
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
//create a const variable named updatedRow with the type RowElement and update the row object with the age set to 23
var updatedRow = __assign(__assign({}, row), { age: 23 });
//call the updateRow function and deleteRow commands
var rowId = CRUD.insertRow(row);
CRUD.updateRow(rowId, updatedRow);
CRUD.deleteRow(rowId);
