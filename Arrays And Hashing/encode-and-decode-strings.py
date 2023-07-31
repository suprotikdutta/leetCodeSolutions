def encode(strs):
    outputStr=""
    for i in strs:
        outputStr += str(len(i))+"%"+i
    return outputStr
def decode(strs):
    res ,i= [],0
    while i<len(strs):
        j=i
        while strs[j]!="%":
            j+=1
        length = int(strs[i:j])
        res.append(strs[j+1:j+length+1])
        i=j+length+1
    return res

print("Hello World")
a=encode(["lin%t","c%%ode","love","you"])
b=decode(a)
print(b)