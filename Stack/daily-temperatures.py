#Monotonic decreasing stack
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0]*len(temperatures)
        stack=[]
        for i,value in enumerate(temperatures):
            while stack and value>temperatures[stack[-1]]:
                popIndex = stack.pop()
                res[popIndex] = i-popIndex
            stack.append(i)
        return res