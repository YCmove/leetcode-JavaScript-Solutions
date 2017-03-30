/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // x < 0 or x > (2^32 - 1) , false;
    if (x < 0 || x > Math.pow(2, 32) - 1) return false
    if (x < 10) return true

    var keepNumber = x
    var recNumber = x % 10
    x = parseInt(x / 10)

    while (x != 0) {
        recNumber = recNumber * 10;
        recNumber = recNumber + x % 10;
        x = parseInt(x / 10);
    }
    return recNumber == keepNumber;

};

module.exports = isPalindrome