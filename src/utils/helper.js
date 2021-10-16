/**
 * creates an unique id with base 62 and length 6 or 7,
 * 62 ^ 7 = 3.5 Trillion Unique ID
 * @param {number} n   - a decimal number
 * @returns            - a unique id with base 62 and length 7
 */
function generateID(n) {
	if (n === 0) {
		return '0';
	}
	var symbols =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var result = '';
	while (n > 0) {
		result = symbols[n % symbols.length] + result;
		n = parseInt(n / symbols.length, 10);
	}

	return result;
}

module.exports = { generateID };
