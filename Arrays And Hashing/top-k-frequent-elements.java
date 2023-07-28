//My solution O(nlogn)
public int[] topKFrequent(int[] nums, int k) {
    HashMap<Integer,Integer> map = new HashMap<>();
    for(int num:nums){
        map.put(num,map.getOrDefault(num,0)+1);
    }
    HashMap<Integer,Integer> map1 = new HashMap<>();
    for(int keys:map.keySet()){
        map1.put(map.get(keys),keys);
    }
    PriorityQueue<Integer> pqueue = new PriorityQueue<>(Collections.reverseOrder());
    for(int keys:map1.keySet()){
        pqueue.add(keys);
    }
    int[] result = new int[k];
    for(int i=0;i<result.length;i++){
        result[i] = map1.get(pqueue.remove());
    }
    return result;

}

//Opimized solution
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer,Integer> map = new HashMap<>();
    List<Integer> bucket[] = new ArrayList[nums.length+1];
    for(int num:nums){
       map.merge(num, 1, Integer::sum);
    }
    for(int key:map.keySet()){
        int freq = map.get(key);
        if(bucket[freq]==null){
            bucket[freq]=new ArrayList<>();
        }
        bucket[freq].add(key);
    }
    int index = 0;
    int[] res = new int[k];
    for(int i=nums.length;i>0;i--){
        if(bucket[i]!=null){
            for(int val:bucket[i]){
                res[index++]=val;
                if(index==k){
                    return res;
                }
            }
        }
    }
    return res;
}