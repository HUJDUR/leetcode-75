const nums = [1, 2, 3, 4];

const containsDuplicate = function (nums) {
	return new Set(nums).size < nums.length;
};

console.log(containsDuplicate(nums));

// Time complexity: O(n) ?, 76 ms,
// Memory usage: 45 MB
