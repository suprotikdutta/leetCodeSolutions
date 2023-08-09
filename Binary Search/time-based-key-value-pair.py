class TimeMap:

    def __init__(self):
        self.map = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        insideArray = self.map.get(key,[[],[]])
        insideArray[0].append(value)
        insideArray[1].append(timestamp)
        self.map[key] = insideArray

    def get(self, key: str, timestamp: int) -> str:
        insideArray =  self.map.get(key,[[],[]])
        timeArr = insideArray[1]
        l=0
        r=len(timeArr)
        while l < r:
            m = (l+r)//2
            if timeArr[m]<timestamp+1:
                l = m + 1
            else:
                r = m
        
        l-=1

        if l==-1:
            return ""
        
        return insideArray[0][l]


        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)