// mergeInterval

// 1️⃣ Sort the array by the start time to process intervals in order

// 2️⃣ Initialize `result` and set it with the first pair

// 3️⃣ Create a for loop to go through the intervals
    // In the for loop:
    // - Get the last merged interval (`prev`) from `result`
    // - Compare the last number of `prev` (prev[1]) with the first number of the current interval (curr[0])
    
    // 4️⃣ If the prev last number (prev[1]) is smaller than curr first number (curr[0]):
    //    - Push the current pair into `result` (since there is no overlap)
    
    // 5️⃣ If the prev last number (prev[1]) is **greater than or equal to** curr first number (curr[0]):
    //    - Merge them by setting `prev[1] = Math.max(prev[1], curr[1])`
    
    // Keep looping until all intervals are processed

// 6️⃣ Finally, return the `result` array containing merged intervals


function mergeInterval(interval) {
    interval.sort((a,b) => a[0] - b[0]);

    let result = [interval[0]];

    for (let i = 1; i < interval.length; i++) {
        let prev = result[result.length - 1];
        let curr = interval[i]
        if (prev[1] < curr[0]) {
            result.push(curr);
        } else {
            prev[1] = Math.max(prev[1], curr[1]);
        }
    }
    return result;
}

console.log(mergeInterval([[1,3], [2,6], [8,10], [15,18]]));  
// ✅ Output: [[1,6], [8,10], [15,18]]

console.log(mergeInterval([[1,4], [4,5]]));  
// ✅ Output: [[1,5]] (Since 4 ≤ 4, merge into [1,5])

console.log(mergeInterval([[1,2], [3,4], [5,6]]));  
// ✅ Output: [[1,2], [3,4], [5,6]] (No overlaps, return as is)

