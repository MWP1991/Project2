/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 2 || created: 09.29.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let policyNumber, customerLastName, customerFirstName, customerAge;
let numberAtFaultDriverAccidentsLastThreeYears, monthlyPremium, premiumDay, premiumMonth, premiumYear;
const BASE_PRICE = 100;
const AGE_LOW = 20;
const AGE_MEDIUM = 10;
const AGE_HIGH = 30;
const EACH_AT_FAULT_ACCIDENT = 50;
const MAX_AGE = 100;
const MIN_AGE = 15;
const PREMIUM_YEAR = 2019;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNumber();
        setCustomerLastName();
        setCustomerFirstName();
        setCustomerAge();
        setNumberOfAtFaultAccidentsLastThreeYears();
        setPremiumDay();
        setPremiumMonth();
        setPremiumYear();
        setMonthlyPremium();
        printMonthlyPremium();
        setContinueResponse();
        return main(); //recursion
    }
    printGoodbye();
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {method}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc policyNumber mutator
 * @returns {null}
 */
function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 100) + 1);  //Random number 1 - 100
}

/**
 * @method
 * @desc customerLastName mutator
 * @returns {null}
 */
function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter your last name: `);
}

/**
 * @method
 * @desc customerFirstName mutator
 * @returns {null}
 */
function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter your first name: `);
}

/**
 * @method
 * @desc  atFaultAccident mutator
 * @returns {method}
 */
function setNumberOfAtFaultAccidentsLastThreeYears() {
    numberAtFaultDriverAccidentsLastThreeYears = Number(PROMPT.question(`\nPlease enter number of at-fault accidents in last 3 years: `));
    if (numberAtFaultDriverAccidentsLastThreeYears < 0 || numberAtFaultDriverAccidentsLastThreeYears > 10) {
        console.log(`I'm sorry, our agency does not cover individuals with more than 10 at-fault driving accidents. Please try again if incorrect number.`);
        return setNumberOfAtFaultAccidentsLastThreeYears();
    }
}

/**
 * @method
 * @desc customerAge mutator
 * @returns {method}
 */
function setCustomerAge() {
    customerAge = Number(PROMPT.question(`\nPlease enter your age: `));
    if (customerAge < MIN_AGE || customerAge > MAX_AGE) {
        console.log(`I'm sorry, that is an incorrect age. Please try again.`);
        return setCustomerAge();
    }
}
/**
 * @method
 * @desc  premiumDay mutator
 * @returns {method}
 */
function setPremiumDay() {
    premiumDay = Math.floor((Math.random() * 30) + 1);  //Random number 1 - 30
}

/**
 * @method
 * @desc  premiumDay mutator
 * @returns {method}
 */
function setPremiumMonth() {
    premiumMonth = Math.floor((Math.random() * 12) + 1);  //Random number 1 - 12
}

/**
 * @method
 * @desc  premiumDay mutator
 * @returns {method}
 */
function setPremiumYear() {
    premiumYear = PREMIUM_YEAR
}


/**
 * @method
 * @desc Set the Monthly Premium
 * @returns {null}
 */
function setMonthlyPremium() {
    if (customerAge > 15 && customerAge < 30) {
        monthlyPremium = BASE_PRICE + AGE_LOW + (numberAtFaultDriverAccidentsLastThreeYears * EACH_AT_FAULT_ACCIDENT);
    } else if (customerAge < 30 && customerAge < 45) {
        monthlyPremium = BASE_PRICE + AGE_MEDIUM + (numberAtFaultDriverAccidentsLastThreeYears * EACH_AT_FAULT_ACCIDENT);
    } else {
        monthlyPremium = BASE_PRICE + AGE_HIGH + (numberAtFaultDriverAccidentsLastThreeYears * EACH_AT_FAULT_ACCIDENT);
    }
}


/**
 * @method
 * @desc Utility: Output results
 * @returns {null}
 */
function printMonthlyPremium() {
    console.log(`\n\t${customerFirstName}'s Total Bill: \$${monthlyPremium}. Policy#: ${policyNumber}. Due: ${premiumMonth}/${premiumDay}/${premiumYear}`);
}

/**
 * @method
 * @desc Utility: Output goodbye
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\n\tGoodbye.`);
}

/*
A program that accepts insurance policy data, including a policy number, customer last name,
customer first name, birth date, premium due date (month, day, and year),
and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:
Base price = $100
Age >15 && < 30 = + $20
Age >= 30 && < 45 +10
Age >=60 +30
Each at-fault accident = + 50
 */
