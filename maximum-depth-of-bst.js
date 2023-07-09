// My Solution
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let leftLength=1;
    let rightLength=1;
    if(root?.left) leftLength +=  maxDepth(root.left);
    if(root?.right) rightLength +=  maxDepth(root.right);
    if(leftLength>rightLength){
        return leftLength;
    }
    return rightLength;
}


//Iterative BFS
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let queue = [];
    let length=0;
    let node;
    queue.push(root);
    while(queue.length){
        for(x of queue){
            node = queue.shift();
            if(node?.left) queue.push(node?.left);
            if(node?.right) queue.push(node?.right);
        }
        length++;
    }
    return length;
};

//Iteratve DFS Also Available
