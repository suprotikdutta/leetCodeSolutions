#My Solution
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        #Get Actual l1 in number

        l1Sum = 0
        multiple = 1
        while l1:
            l1Sum += l1.val * multiple
            l1 = l1.next
            multiple = multiple * 10

        #Get Actual l2 in number
        l2Sum = 0
        multiple = 1
        while l2:
            l2Sum += l2.val * multiple
            l2 = l2.next
            multiple = multiple * 10

        total = l1Sum + l2Sum

        #Create a new list and return
        head = None
        while total:
            lastDigit = total % 10
            newNode = ListNode(lastDigit)
            temp = head
            head = newNode
            head.next = temp
            total = total // 10
            # if head:

        if head==None:
            return ListNode(0)

        #Reversing the sum list
        prev = None
        while head:
            temp = head.next
            head.next = prev
            prev = head
            head = temp


        return prev
    

#Optimized Solution

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()
        cur = dummy

        carry = 0
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            # new digit
            val = v1 + v2 + carry
            carry = val // 10
            val = val % 10
            cur.next = ListNode(val)

            # update ptrs
            cur = cur.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return dummy.next