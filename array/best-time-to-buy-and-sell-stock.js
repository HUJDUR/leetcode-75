const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = function (prices) {
	let maxProfit = 0;
	let minElement = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minElement) minElement = prices[i];
		else maxProfit = Math.max(maxProfit, prices[i] - minElement);
	}

	return maxProfit;
};

console.log(maxProfit(prices));

// Time complexity: O(n), 96 ms,
// Space usage: 48.9 MB
