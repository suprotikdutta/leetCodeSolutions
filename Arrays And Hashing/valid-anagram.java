// Sorting Solution
public boolean isAnagram(String s, String t) {
    char[] sChars = s.toCharArray();
    char[] tChars = t.toCharArray();
    Arrays.sort(sChars);
    Arrays.sort(tChars);
    return Arrays.equals(sChars,tChars);
}

//Hasp Map Solution

public boolean isAnagram(String s, String t) {
    Map<Character,Integer> count = new HashMap<>();
    for(char x: s.toCharArray()){
        count.put(x,count.getOrDefault(x,0)+1);
    }
    for(char x: t.toCharArray()){
        count.put(x,count.getOrDefault(x,0)-1);
    }
    for(int val:count.values()){
        if(val!=0){
            return false;
        }
    }
    return true;
}