def twoSum(nums, target: int):
    # Solution 1
    # for i in range(len(nums)):
    #     for j in range(i+1, len(nums)):
    #         if nums[i]+nums[j] == target:
    #             return [i, j]
    # return [0, 0]

    # Solution 2
    prevMap = {}  # val -> index
    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i


a = twoSum([2, 7, 11, 15], 9)
print(a)
