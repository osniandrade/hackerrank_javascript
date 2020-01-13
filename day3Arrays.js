// https://www.hackerrank.com/challenges/js10-arrays/problem

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
	let largest = 0;
	let secLargest = 0;

	nums.sort(function (a, b) { 
		return (a - b); 
	})
	for (let i in nums) {
		if (nums[i] > largest) {
			secLargest = largest;
			largest = nums[i];
		}
	}
	return (secLargest);
}