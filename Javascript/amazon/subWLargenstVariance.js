// The variance of a string is defined as the largest difference between the number of occurrences of any 2 characters present in the string. Note the two characters may or may not be the same.
//Given a string s consisting of lowercase English letters only, return the largest variance possible among all substrings of s.
//A substring is a contiguous sequence of characters within a string.


// Example 1: tried to do a balance between good Time & space complexity

const largestVariance = function(s) {
    const length = s.length;
    const baseCharCode = 'a'.charCodeAt(0);
    let maxVariance = 0;
    const charCounters = new Array(26).fill(0);

    // Count frequency of each character in s
    for (let i = 0; i < length; i++) {
        charCounters[s.charCodeAt(i) - baseCharCode]++;
    }

    // For each pair of characters
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            if (i == j || charCounters[i] == 0 || charCounters[j] == 0) {
                continue;
            }

            let majorCount = 0, minorCount = 0, remainingMinors = charCounters[j];

            // Calculate variance for substrings starting at each index
            for (let k = 0; k < length; k++) {
                const currentChar = s.charCodeAt(k) - baseCharCode;
                if (currentChar == i) {
                    majorCount++;
                } else if (currentChar == j) {
                    minorCount++;
                    remainingMinors--;
                }

                if (minorCount > 0) {
                    maxVariance = Math.max(maxVariance, majorCount - minorCount);
                }

                // If majorCount < minorCount, reset counts to start a new substring
                if (majorCount < minorCount && remainingMinors > 0) {
                    majorCount = 0;
                    minorCount = 0;
                }
            }
        }
    }
    
    return maxVariance;
};