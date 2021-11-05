const nums = [3, 2, 4, 3, 2, 4];
const target = 6;

const twoSum = function (nums, target) {
	if (nums.length < 2) return 0;
	const result = [];
	let kolicina = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue;
			if (nums[i] + nums[j] !== target) continue;

			result.push(i, j);
			return result;
		}
	}
};

console.log(twoSum(nums, target));

// Time complexity: O(n^2), 168 ms,
// Space usage: 39.8 MB
