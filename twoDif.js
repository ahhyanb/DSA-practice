/*
Problem: 
    Given an array of numbers nums and a difference value diff, 
    find two numbers where the absolute difference between them equals diff. 
    Return their indices. If no pair exists, return null.

Example: 
    Input: 
        nums = [5, 10, 15, 20], diff = 5
    Output: 
        [0, 1]  // Because |5 - 10| = 5
*/

function twoDiff(nums, diff) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(Math.abs(nums[j] - nums[i]) === diff) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(twoDiff([5, 10, 15, 20], 5));  // Output: [0, 1]
console.log(twoDiff([5, 8, 15, 20], 5));  // Output: null (No valid pair)
console.log(twoDiff([1, 7, 3, 9], 4));  // Output: [2, 3]
console.log(twoDiff([10, 15, 25, 30], 15));  // Output: [0, 2]
console.log(twoDiff([4, 2, 1, 6], 3));  // Output: [1, 3]


function twoDiffMap(nums, diff) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i] + diff; // Check if a smaller number exists
        let sub = nums[i] - diff; // Check if a larger number exists

        // 🔹 Check if either complement is already stored in the map
        if (map.has(sum)) {
            return [map.get(sum), i];  // Return stored index & current index
        }
        if (map.has(sub)) {
            return [map.get(sub), i];  // Return stored index & current index
        }

        // 🔹 Store the current number after checks
        map.set(nums[i], i);
    }
    return null; // No valid pair found
}

