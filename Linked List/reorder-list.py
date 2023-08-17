# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        slow , fast = head , head.next
        
        #Mid Point Find Out Of The List
        while fast and fast.next:
            slow=slow.next 
            fast=fast.next.next

        first = head
        second = slow.next
        slow.next=None

        #Reversing the second list
        prev = None
        while second:
            temp = second.next
            second.next = prev
            prev = second
            second = temp

        #Merging both the lists
        first , second = head , prev
        while second:
            temp1 = first.next
            temp2 = second.next
            first.next = second
            second.next = temp1
            first=temp1
            second=temp2


