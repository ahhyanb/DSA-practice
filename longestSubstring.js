function longestSubstring(s) {
    let set = new Set(); // create a new set to keep track pf unique char
    let left = 0; 
    let maxLength = 0; // keep track of the longest length we see 

    for (let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(longestSubstring("abcab")) // 3