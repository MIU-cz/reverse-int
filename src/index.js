module.exports = function reverse (n) {
    let numStr = n.toString();

    if (n < 0) {
        numStr = numStr.substring(1);
    }

    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);

    if (n < 0) {
        reversedStr = -reversedStr;
    }

    return reversedNum;
}
