/* 
Problem:
    Given an array of numbers nums and a target value target, find the pair of 
    numbers whose sum is closest to the target. Return their indices.

Examples: 
    Example 1
        Input: nums = [1, 3, 7, 10, 15], target = 8
        Output: [0, 2]  // Because 1 + 7 = 8 (exact match)
    Example 2
        Input: nums = [2, 5, 9, 12], target = 10
        Output: [0, 1]  // Because 2 + 5 = 7 is the closest sum to 10
    Example 3
        Input: nums = [1, 4, 6, 8], target = 11
        Output: [1, 2]  // Because 4 + 6 = 10 (closest to 11)
*/


function closestSum(nums, target) {
    let closestSum = Infinity; // Stores the closest sum found
    let closestPair = []; // Stores the indices of the closest pair

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];

            // If exact match found, return immediately
            if (sum === target) {
                return [i, j];
            }

            // Check if this sum is closer than the previously stored closestSum
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
                closestPair = [i, j]; // Update closest pair indices
            }
        }
    }

    // If no exact match is found, return the closest pair found
    return closestPair.length > 0 ? closestPair : null;
}

console.log(closestSum([2, 5, 9, 12], 10)); // Output: [0, 2] (2 + 9 = 11)