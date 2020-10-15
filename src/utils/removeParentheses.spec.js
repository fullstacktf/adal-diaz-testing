const removeParentheses = require("./removeParentheses");

describe("Remove the parentheses", () => {
    it("Remove the parentheses without space in blank ", () => {
        const result = removeParentheses("example(unwanted thing)example");
        expect(result).toEqual("exampleexample");
    })
})