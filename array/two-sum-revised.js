const nums = [3, 2, 4, 3, 2, 4];
const target = 6;

const twoSum = function (nums, target) {
	const memo = {};

	for (let i = 0; i < nums.length; i++) {
		const number = nums[i];
		const remaining = target - number;

		if (remaining in memo) {
			return [memo[remaining], i];
		}

		memo[number] = i;
	}
};

console.log(twoSum(nums, target));

// Time complexity: O(n), 72 ms
// Space usage: 40.7 MB
