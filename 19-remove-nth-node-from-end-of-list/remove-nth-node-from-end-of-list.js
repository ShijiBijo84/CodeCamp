/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let temp = new ListNode(0)
  temp.next=head;
  let fast=temp
  let slow= temp
  for(let i=0;i<=n;i++){
    fast=fast.next
  }
  while(fast!==null){
    fast = fast.next
    slow = slow.next
  }
  slow.next= slow.next.next
  return temp.next
};