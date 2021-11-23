const nums = [2, 3, -2, 4];

const maxProduct = function (nums) {
	let result = -Infinity;
	let max = 1;
	let min = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			max = 1;
			min = 1;
		}

		let temporary = max;

		max = Math.max(nums[i] * temporary, nums[i] * min, nums[i]);
		min = Math.min(nums[i] * temporary, nums[i] * min, nums[i]);
		result = Math.max(max, result);
	}
	return result;
};

console.log(maxProduct(nums));

// Time complexity: O(n), 72ms,
// Memory usage: 40.6 MB
