// Most Optimized O(N) space O(1)
var reverseList = function (head) {
  let previous = null;
  let current = head;
  while (current != null) {
    const temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
};

//Recuresive solution
var reverseList = function (head) {
  const isBaseCase = !head?.next;
  if (isBaseCase) return head;

  return dfs(head);
};

const dfs = (curr) => {
  const prev = reverseList(curr.next); /* Time O(N) | Space O(N) */

  curr.next.next = curr;
  curr.next = null;

  return prev;
};
