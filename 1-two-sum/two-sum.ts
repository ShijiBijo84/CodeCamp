function twoSum(nums: number[], target: number): number[] {   
   for(let index = 0; index <nums.length; index++){
    for(let i = index + 1 ; i < nums.length; i++){
        if(nums[index] + nums[i] === target){
            return [index, i];
        }
    }
   }
   return [];
};