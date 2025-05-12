/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null
    const mergeTwoLists = (l1, l2) => {
        let newList = new ListNode(-1)
        let dummy = newList
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                dummy.next = l1
                l1 = l1.next
            } else {
                dummy.next = l2
                l2 = l2.next
            }
            dummy = dummy.next
        }
        dummy.next = l1 || l2
        return newList.next
    }
    let result = lists[0]
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i])
    }
    return result
};