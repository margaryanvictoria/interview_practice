function findMostFrequest(arr) {
    let mostFreqCount = "";
    let mostFreq = "";
    
    arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;

        if(acc[val] > mostFreqCount) {
            mostFreqCount = acc[val];    // than make it a new compare value.
            mostFreq = val;        // also make that key most frequent.
        }

        return acc;
    }, {})
    console.log(`Most Frequent Item is: ${mostFreq} with ${mostFreqCount} occurrences.`);
}

let data = ["cat", "dog", "parrot", "dog", "cat", "elephant","elephant","elephant","elephant", "lion", "cat", "elephant", "lion", "lion", "lion", "parrot"];
findMostFrequest(data);