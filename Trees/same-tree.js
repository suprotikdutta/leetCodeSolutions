//My Solution

var isSameTree = function(p, q) {
    let pArray = [];
    let qArray = [];
    dfs(p,pArray);
    dfs(q,qArray);
    if(pArray.length!=qArray.length){
        return false;
    }
    for(let i in pArray){
        if(pArray[i]!=qArray[i]){
            return false;
        }
    }
    return true;
};

var dfs = function(root,array){
    if(!root) return;
    if(root.left){
        dfs(root.left,array);
    }
    array.push(root.val)
    if(root.right){
        dfs(root.right,array);
    }
}

//Optimized
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val != q.val) return false;
    return (isSameTree(p.left,q.left)&&isSameTree(p.right,q.right));
};