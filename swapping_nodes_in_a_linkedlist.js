/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    let val, next_val, pointer;

    if(head == null){
        return head
    }

    pointer = head
    while(pointer.next != null && head.next != null){
            val = head.val;
            next_val = head.next.val;
            head.next.val = val;
            head.val = next_val;


            if(head.next.next){
                head = head.next.next;
            }else {
                break
            }
    }

    return pointer
};