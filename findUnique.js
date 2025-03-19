function findUniqueChar(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}

// ✅ Test Cases
console.log(findUniqueChar("leetcode")); // Output: 0  ('l' is first unique)
console.log(findUniqueChar("loveleetcode")); // Output: 2  ('v' is first unique)
console.log(findUniqueChar("aabb")); // Output: -1  (No unique character)