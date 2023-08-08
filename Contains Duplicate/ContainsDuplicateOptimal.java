var containsDuplicate = function(nums) {
    do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            temp = nums[i + 1];
            nums[i + 1] = nums[i];
            nums[i] = temp;
            swapped = true;
        } else if(nums[i] == nums[i+1] || (nums[i] == nums[nums.length - 1])){
            return true; 

        } else {
            return false
        }
    }
} while (swapped);
};