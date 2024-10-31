function rotate(nums, k) {
	const n = nums.length;
	const copyNums = [...nums];
	k = k % n;
	
	for (let i = 0; i < n; i++) {
		let idx = (i + k) % n;
		nums[idx] = copyNums[i];
	}
	};

const main = () => {
	// 189
	let nums = [1,2,3,4,5,6,7]
	rotate(nums, 3)
	console.log(nums)
}

main()
