function rotate(nums, k) {
	for (let i = 0; i < nums.length; i++) {
		const val = (nums.length + k) % nums.length;
		nums[i] = val
		k--;
	}
	
	console.log(nums)
};

rotate([1,2,3,4,5,6,7], 3)
