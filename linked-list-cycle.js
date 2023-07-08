//My solution (O(N)+S(N))
var hasCycle = function (head) {
  let hashMap = {};
  while (head) {
    if (hashMap.hasOwnProperty(head.next)) {
      return true;
    }
    hashMap[head] = head.val;
    head = head.next;
  }
  return false;
};

//Optimized solution (O(N)+S(1))
var hasCycle = function (head) {
  let fast = (slow = head);
  while (fast && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
