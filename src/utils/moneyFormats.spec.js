const moneyFormat = require("./moneyFormats");
/*
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

*/

describe("moneyFormats", () => {
    it("formats 19.99", () => {
        const result = moneyFormat(19.99);
        expect(result).toEqual("$19.99");
    })
    it("formats 250", () => {
        const result = moneyFormat(250);
        expect(result).toEqual("$250.00");
    })
    it("formats 9500.95", () => {
        const result = moneyFormat(9500.95);
        expect(result).toEqual("$9500.95");
    })
})