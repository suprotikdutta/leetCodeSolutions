//My Code
var isBalanced = function(root,diff=[0]) {
    if(!root) return true;
    heightDfs(root,diff);
    if(diff[0]<=1){
        return true;
    }
    return false;
};

var heightDfs = function(root,diff){
    let leftHeight=0;
    let rightHeight=0;
    if(root?.left){
        leftHeight =heightDfs(root.left,diff);
    }
    if(root?.right){
        rightHeight =heightDfs(root.left,diff);
    }
    diff[0] = Math.max(diff[0],Math.abs(leftHeight,rightHeight));
    return 1+Math.max(leftHeight,rightHeight);    
}

//Optimized

var isBalanced = function(root) {
    return dfs(root)[0];
};

var dfs = function(root){
    if(!root){
        return [true,0];
    }
    let left = [true,0];
    let right = [true,0];
    if(root?.left){
        left = dfs(root.left);
    }
    if(root?.right){
        right = dfs(root.right);
    }
    let balanced = (left[0] && right[0] && Math.abs(left[1]-right[1])<=1)
    return [balanced,1+Math.max(left[1],right[1])];
}