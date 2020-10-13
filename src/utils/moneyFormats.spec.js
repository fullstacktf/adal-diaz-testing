const moneyFormat = require("./moneyFormats");

assertEquals(moneyFormat(19.99), "$19.99");

assertEquals(moneyFormat(250), "$250.00");

assertEquals(moneyFormat(9500.95), "$9500.95");

function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got "${result}"`,
        );
    } else {
        console.log("All OK");
    }
}


/*
const value1 = moneyFormat(19.99)
console.log(value1)

const value2 = moneyFormat(250)
console.log(value2)

const value3 = moneyFormat(9500.95)
console.log(value3)

*/