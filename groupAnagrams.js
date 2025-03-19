function groupAnagrrams(array) {

    const groups = new Map();

    for (let word of array) {
        
        let sortedWord = word.split("").sort().join("");

        if (!groups.has(sortedWord)) {
            groups.set(sortedWord, [word]);
        } else {
            groups.get(sortedWord).push(word);
        }
    }

    return [...groups.values()];


}

const anagrams = groupAnagrrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

console.log(anagrams);