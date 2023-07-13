// My solution
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let middle;
  while (low < high) {
    middle = Math.floor((low + high) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (target > nums[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
};
