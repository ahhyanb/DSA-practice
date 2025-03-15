function twoSumMap(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const dif = target - nums[i];

        if(map.has(dif)) {
            return [map.get(dif), i]; // get the index of that dif and the current index of the iteration
        }
        map.set(nums[i], i); // if its not in the map, put it in the map
    }

    return null; // no pairs found

}


console.log(twoSumMap([1, 2, 3, 4], 3)); // Output: [0, 1]
console.log(twoSumMap([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumMap([3, 2, 4], 6)); // Output: [1, 2]