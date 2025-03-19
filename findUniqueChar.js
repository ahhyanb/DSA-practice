function findUniqueChar(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [i]);
        } else {
            let char = map.get(s[i]);
            char.push(i);
        }
    }

    map.forEach((char) => {
        if (char.length === 1) {
            return char;
        }
    })

}


const b = findUniqueChar("aabcc");
console.log(b);
