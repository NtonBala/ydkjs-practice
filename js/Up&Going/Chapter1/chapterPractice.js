function foo() {
	// Settings
	const TAX_RATE = 0.08;
	const PHONE_PRICE = 99.99;
	const ACCESSORY_PRICE = 9.99;

	let totalPrice = 0;

	// Instruments
	function _calcTax(amount) {
		return amount * TAX_RATE;
    }

	function _formatPrice(price) {
		return `$${price.toFixed(2)}`;
    }

	function _getInput(amountType, isError) {
		const message = isError
			? `Your ${amountType} should be a valid number.\nPlease reenter it:`
			: `Please, enter your ${amountType}:`;

		const input = prompt(message);
		const inputNum = Number(input);
		
		if (!input || isNaN(inputNum)) {
			_getInput(amountType, true);
        } else {;
			return inputNum;
        }
    }

	function _calcPurchase(total, threshold) {
		const result = total + PHONE_PRICE;
															
		if (result < threshold) return result + ACCESSORY_PRICE;

        return result;
    }
	//

	const balance = _getInput('account balance');
	const spendingThreshold = _getInput('spending threshold');

	while (totalPrice < balance) {
		totalPrice = _calcPurchase(totalPrice, spendingThreshold);
    }

	totalPrice += _calcTax(totalPrice);
    
    console.log('-> Your purchase:', _formatPrice(totalPrice));

	if (totalPrice > balance) {
		console.log("You can't afford this purchase :-(");
    }
}
