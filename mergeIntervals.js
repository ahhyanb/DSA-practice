function mergeIntervals(intervals) {
    console.log(intervals)

    if (intervals.length === 0) return [];  // ✅ Edge case: No intervals

    // ✅ Step 1: Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // ✅ Step 2: Start with the first interval
    let result = [intervals[0]]; 
    
    console.log(result);

     // ✅ Step 3: Loop through the rest
    for (let i = 1; i < intervals.length; i++) { 
        // Last merged interval
        let prev = result[result.length - 1];
        console.log("this is the previous array ", prev);

        // Current interval
        let curr = intervals[i];  
        console.log("this is the current array in the for loop ", curr)
        // ✅ Overlapping case
        if (curr[0] <= prev[1]) { 
            console.log("if the first number in the current array of the for loop is less than the number of the last number from the previous array ", curr[0], prev[1])
            // Merge intervals by updating end

            prev[1] = Math.max(prev[1], curr[1]); 
            console.log("update the last number in the previous array with the current last number of the current array", curr[1])
        } else { 
            // ✅ No overlap, add it as a new interval
            
            result.push(curr);
            console.log("if the last number in the previous array is smaller, push the current array in the result because there is no overlap", curr )
        }
    }
    // ✅ Step 4: Return merged intervals
    return result; 
}


console.log(mergeIntervals([[1,3], [2,6], [8,10], [15,18]]));  
// ✅ Output: [[1,6], [8,10], [15,18]]

