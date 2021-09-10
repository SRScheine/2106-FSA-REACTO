/*
https://gist.github.com/iae1/767811c07335d3131a23bf74423c9f23

Merge N Sorted Linked Lists
Learning Objective
Apply previous solutions to increasingly complex problems
Interviewer Prompt
Write a function that takes in the heads of N sorted Singly Linked Lists and return the merged list. The merged list should be in sorted order.

Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to none / null if it is the tail of the list.

Example Output
Input =
[
  1->5->7,
  1->2->4->8,
  3->6->8
]

Output = 1->1->2->3->4->5->6->7->8->8
Brute Force Approach
A naive approach would be to:

Iterate over all the linked lists in the input array and insert node values in an array
Sort this array in an ascending order
Initialize a new linked list and iterate over this sorted array and create a new node for each value and add it to the linked list
Return the merged list
Brute Force Solution
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeNLists(lists) {
    let nodes = [];
    for (let listsIdx = 0; listsIdx < lists.length; listsIdx++) {
        let currentList = lists[listsIdx];
        while (currentList !== null) {
            nodes.push(currentList.val);
            currentList = currentList.next;
        };
    }
    nodes.sort((a,b) => a - b);
    let mergedList = new ListNode(0);
    let currentNode = mergedList;
    for (let nodesIdx = 0; nodesIdx < nodes.length; nodesIdx++) {
        currentNode.next = new ListNode(nodes[nodesIdx]);
        currentNode = currentNode.next;
    }
    return mergedList.next;
};
Brute Force Solution Complexity Analysis
n represents the total number of nodes in an input array.

Time Complexity: O(n log n)
Inserting all node values in an array takes O(n) time
Sorting this array using sort() method takes O(n log n) time
Generating the merged linked list by iterating over this sorted array takes O(n) time
Space Complexity: O(n)
Creating an array with all node values takes O(n) space
Sorting this array using sort() method takes O(log n) space (click here to learn more about time and space complexity of sort() method)
Generating the merged linked list takes O(n) space
Optimized Approach by Divide and Conquer
An optimized approach would be to:

Pair up N lists and merge each pair into a single sorted list
Pair up these sorted lists and merge each pair into a single sorted list
Repeat step 2 until one single sorted list of N linked lists is generated
Return the merged list

SEE CODE NOT COMMENTED OUT BELOW FOR AN EASY TO FOLLOW OPTIMIZED SOLUTION

Optimized Solution
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function merge2Lists(list1, list2) {
    let mergedList = new ListNode(0)

    let curr = mergedList
    while (list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 !== null? list1 : list2
    return mergedList.next
}


function mergeNLists(lists) {
    if(lists.length === 0) {
        return null
    }
    let interval = 1
    while (lists.length > interval) {
        let idx = 0;
        while (idx + interval < lists.length) {
            lists[idx] = merge2Lists(lists[idx], lists[idx + interval])
            idx += interval * 2
        }
    	interval *= 2
    }
    return lists[0]
}
Optimized Solution Complexity Analysis
n represents the total number of nodes in an input array.
N represents the total number of linked lists in an input array.

Time Complexity: O(n log N)
Outer while loop which runs until one merged list is created takes O(log N) time
Processing all nodes in N linked lists takes O(n) time
Space Complexity: O(1)
Merging N sorted linked lists takes O(1) space

*/

// Better optimized solution

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const merge2Lists = (a, b) => {
  let mergedList = new ListNode(0);
  let current = mergedList;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  current.next = a !== null ? a : b;
  return mergedList.next;
};

const mergeNLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }
  if (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let mergedAB = merge2Lists(a, b);
    lists.push(mergedAB);
  }
  return lists[0];
};
