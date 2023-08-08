class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> complement= new HashMap <Integer,Integer>();
        for(int i = 0; i < nums.length; i++){
            Integer complementIndex = complement.get(nums[i]);
        if(complementIndex != null){
            return new int[]{i, complement.get(nums[i])};
        }
        complement.put(target - nums[i], i);
    }
    return nums;
}
}