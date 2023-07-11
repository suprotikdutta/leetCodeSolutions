class Node
{
    constructor()
    {
        this.val = 0;
        this.left = null;
        this.right = null;
    }
};
   
// Function to create
// new node
function newNode(x)
{
    var temp = new Node();
    temp.val = x;
    temp.left = null;
    temp.right = null;
    return temp;
}

var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.right.left = newNode(6);
root.right.right = newNode(7);

var root2 = newNode(2);
root2.left = newNode(4);
root2.right = newNode(5);

var dfs = function(root,array){
    if(!root) return 0;
    if(root?.left){
        dfs(root.left,array);
    }
    array.push(root.val);
    if(root?.right){
        dfs(root.right,array);
    }
    return;
}

var contains=function(arr1,arr2){
    let counter=0;
    for(let i=0;i<arr1.length;i++){
        if(counter>0&&counter<arr2.length){
            if(arr1[i]!=arr2[counter]){
                return false;
            }
            counter++;
        }
        if(arr1[i]==arr2[counter]){
            counter++;
        }
    }
    if(counter==arr2.length) return true;
    return false;
}

var isSubtree = function(root, subRoot) {
    if(!root || !subRoot) return true;
    let rootArray=[];
    let subRootArray=[];
    dfs(root,rootArray);
    dfs(subRoot,subRootArray);
    const doesContains = contains(rootArray,subRootArray);
    return doesContains;
};
a=isSubtree(root,root2);
console.log(a);