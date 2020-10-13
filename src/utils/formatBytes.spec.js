const formatBytes = require("./formatBytes");

/*function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got "${result}"`,
        );
    }
}

assertEquals(formatBytes(900), "900MB");
assertEquals(formatBytes(1900), "1GB 900MB");
assertEquals(formatBytes(568200), "568GB 200MB");
assertEquals(formatBytes(1234567), "1TB 234GB 567MB");
*/

describe("formatBytes", () => {
    it("formats in MBs", () => {
        const result = formatBytes(900);
        expect(result).toEqual("900MB");
    })
    it.skip("formats in GBs", () => {
        const result = formatBytes(2000);
        expect(result).toEqual("2GB");
    })
    it("formats in  TBs", () => {
        const result = formatBytes(1000000);
        expect(result).toEqual("1TB");
    })
    it("formats in all", () => {
        const result = formatBytes(1234567);
        expect(result).toEqual("1TB 234GB 567MB");
    })
})
