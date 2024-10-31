package main

import "fmt"

func rotate(nums []int, k int) {
	n := len(nums)
	copyNums := make([]int, n)
	copy(copyNums, nums)

	k = k % n

	for i := 0; i < n; i++ {
		idx := (i + k) % n
		nums[idx] = copyNums[i]
	}
}

func main() {
	// 189
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	rotate(nums, 3)
	fmt.Println(nums)
}
