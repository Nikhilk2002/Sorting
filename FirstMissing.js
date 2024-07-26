function firstMissingPositive(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[nums[i] - 1] !== nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

}

console.log(firstMissingPositive([1,2,0])); 

console.log(firstMissingPositive( [7,8,13,11,12])); 

console.log(firstMissingPositive([3,4,-1,1])); 
