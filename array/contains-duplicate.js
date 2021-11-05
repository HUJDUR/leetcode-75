const nums = [1, 2, 3, 4];

const containsDuplicate = function (nums) {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true;
		set.add(nums[i]);
	}
	return false;
};

console.log(containsDuplicate(nums));

// Time complexity: O(n), 88 ms
// Space usage: 44.6 MB
