# Optimized solution
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = 0
        l ,r = 0,len(nums)-1
        while l <= r:
            m = (l+r)//2
            #print(m,l,r)
            if nums[m] == target:
                return m

            #Left Sorted Portion
            if nums[l] <= nums[m]:
                if target > nums[m]:
                    l = m+1
                elif target < nums[l]:
                    l = m+1
                else:
                    r=m-1
            #Right Sorted Portion
            else:
                if target < nums[m]:
                    r=m-1
                elif target > nums[r]:
                    r=m-1
                else:
                    l=m+1
        return -1