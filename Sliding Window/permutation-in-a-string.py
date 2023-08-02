#My Normal Solution - O(n*26)
def checkInclusion(self, s1: str, s2: str) -> bool:
        if(len(s2)<len(s1)):
            return False
        count = {}
        subCount = {}
        for i in range(len(s1)):
            count[s1[i]] = 1 + count.get(s1[i],0)
            subCount[s2[i]]=1+subCount.get(s2[i],0)
        l=0
        r=len(s1)-1
        while r < len(s2):
            if count==subCount:
                return True
            if subCount[s2[l]]:
                if subCount[s2[l]]>1:
                    subCount[s2[l]]-=1
                else:
                    subCount.pop(s2[l])

            l+=1
            r+=1
            if r <len(s2):
                subCount[s2[r]]=1+subCount.get(s2[r],0)

        return False

#NeetCode Optimized Solution
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2)<len(s1):
            return False

        s1Count = {}
        s2Count = {}

        for i in range(26):
            s1Count[i] = 0
            s2Count[i] = 0

        for i in range(len(s1)):
            s1Count[ord(s1[i])-ord('a')]+=1
            s2Count[ord(s2[i])-ord('a')]+=1

        matches=0

        for i in range(26):
            if s1Count[i]==s2Count[i]:
                matches+=1

        l=0
        for r in range(len(s1),len(s2)):
            if matches==26:
                return True

            #Right Index part    
            index = ord(s2[r])-ord("a")
            s2Count[index]+=1
            if s2Count[index] == s1Count[index]:
                matches+=1
            elif s2Count[index] == s1Count[index] + 1:
                matches-=1

            #Left Index Part
            index = ord(s2[l])-ord("a")
            s2Count[index]-=1
            if s2Count[index] == s1Count[index]:
                matches+=1
            elif s2Count[index] == s1Count[index]-1:
                matches-=1
            l+=1
            
        return matches==26
