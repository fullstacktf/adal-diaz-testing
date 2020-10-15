/**
 * 
 * @param {str} str string to remove everything inside the parentheses as well as the parentheses themselves.
 * @param {firstPosition} int position where the parentheses begin
 * @param {secondPosition} int position where the parentheses end
 * @param {sortString} str substring that I want to remove
 */

function removeParentheses(str) {
    const firstPosition = str.indexOf("(");
    const secondPosition = str.indexOf(")");
    const sortString = str.substring(firstPosition, secondPosition + 1);

    return str.replace(sortString, '');
}

module.exports = removeParentheses;