/*
Given an array of nums and a target sum, return the indices of the numbers that
add up to the targe

    Input: nums = [2, 7, 11, 15], target = 9
    Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
*/

////// brute force 0(n^2) //////

function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(twoSum([1,2,3,4], 3)); // [0, 1]
console.log(twoSum([1,2,3,4], 7)); // [2, 3]
console.log(twoSum([4,2,3,1], 7)); // [0, 2]
