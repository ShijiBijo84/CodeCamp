/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(-1)
    let temp=newList
    //traverse through list1 and list2
    while(list1&&list2){
        if(list1.val<=list2.val){
            temp.next=list1
            //next list1 node
            list1=list1.next
        }else{
            temp.next=list2
            //next list2 node
            list2=list2.next
        }
        //move temp forward
        temp=temp.next
    }
    temp.next=list1||list2
    //need to avoid node with -1
    return newList.next
};