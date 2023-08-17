var topKFrequent = function(nums, k) {
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!numMap.has(nums[i])) {
            numMap.set(nums[i], 1);
        } else {
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }

    const entriesArray = Array.from(numMap.entries());
const sortedEntries = entriesArray.sort((a, b) => b[1] - a[1]);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedEntries[i][0]);
    }

    return result;
};