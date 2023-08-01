class Solution:
    def maxArea(self, nums: List[int]) -> int:
        maxWater=0
        l=0
        r=len(nums)-1
        while l<r:
            currentWater = min(nums[l],nums[r])*(r-l)
            maxWater=max(currentWater,maxWater)
            if nums[l]<nums[r]:
                l+=1
            elif nums[l]>nums[r]:
                r-=1
            else:
                l+=1
        return maxWater