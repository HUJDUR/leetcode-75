const nums = [2, 3, -2, 4];

const maxSubArray = function (nums) {
	let max = nums[0];
	let currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (currentSum < 0) currentSum = 0;
		currentSum += nums[i];
		max = Math.max(max, currentSum);
	}

	return max;
};

console.log(maxSubArray(nums));

// Time complexity: O(n), 100ms
// Memory usage: 48.4 MB
