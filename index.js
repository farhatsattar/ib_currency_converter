'#!/usr/bin/env node';
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.51,
    EUR: 0.92394,
    INR: 83.501,
    GBP: 0.78015,
    AED: 3.67253,
    JPY: 161.558,
    AUD: 1.48275,
    ARS: 917.948,
    AZN: 1.7,
    CNH: 7.29106,
    CAD: 1.3626,
    SAR: 3.74833,
    IQD: 1287.06,
    IRR: 42005.5,
    TRY: 32.8803,
    AFN: 70.0264,
    BDT: 116.334,
};
let userSelection = await inquirer.prompt([
    {
        type: "list",
        message: "select your currency you want to convert",
        name: "convertFrom",
        choices: ["USD", "PKR", "INR", "GBP", "AED", "JPY", "AUD", "ARS", "AZN", "CNH", "CAD", "SAR", "IQD", "IRR", "TRY", "AFN", "BDT"]
    },
    {
        type: "list",
        message: "select your currency in which you want to convert",
        name: "convertTo",
        choices: ["USD", "PKR", "INR", "GBP", "AED", "JPY", "AUD", "ARS", "AZN", "CNH", "CAD", "SAR", "IQD", "IRR", "TRY", "AFN", "BDT"]
    },
    {
        type: "number",
        message: "How much amount you want to convert",
        name: "Amount"
    },
]);
let fromList = currency[userSelection.convertFrom];
let toList = currency[userSelection.convertTo];
let amount = userSelection.Amount;
let baseAmount = amount / fromList;
let convertedAmount = baseAmount * toList;
console.log(convertedAmount);
