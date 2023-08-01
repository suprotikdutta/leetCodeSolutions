#MY SOLUTION
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        i=0
        longestSubStr=""
        maxLength=0
        while i<len(s):
            index=longestSubStr.find(s[i])
            if index==-1:
                longestSubStr+=s[i]
                i+=1
                continue
            if len(longestSubStr)>maxLength:
                maxLength=len(longestSubStr)
            longestSubStr=longestSubStr[index+1:]
            longestSubStr+=s[i]
            i+=1
        maxLength = max(maxLength,len(longestSubStr))
        return maxLength
    
#OPTIMIZED USING A SET
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            res = max(res, r - l + 1)
        return res
