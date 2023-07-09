// My Solution
var invertTree = function(root) {
    if(!root){
        return null
    }
     if(root?.left) invertTree(root.left);
     if(root?.right) invertTree(root.right);
     const temp = root?.left?root?.left:null;
     root.left = root?.right?root?.right:null;
     root.right = temp;
     return root;
};