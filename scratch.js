// We create a class for each node within the list
class Node{
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(val){
      this.val = val
      this.next = null
  }
}

// We create a class for the list
class SinglyLinkedList{
  // The list has three properties, the head, the tail and the list size
  constructor(){
      this.head = null
      this.tail = null
      this.length = 0
  }
  // The push method takes a value as parameter and assigns it as the tail of the list
  push(val) {
      const newNode = new Node(val)
      if (!this.head){
          this.head = newNode
          this.tail = this.head
      } else {
          this.tail.next = newNode
          this.tail = newNode
      }
      this.length++
      return this
  }
  // The pop method removes the tail of the list
  pop() {
      if (!this.head) return undefined
      const current = this.head
      const newTail = current
      while (current.next) {
          newTail = current
          current = current.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      if (this.length === 0) {
          this.head = null
          this.tail = null
      }
      return current
  }
  // The shift method removes the head of the list
  shift() {
      if (!this.head) return undefined
      var currentHead = this.head
      this.head = currentHead.next
      this.length--
      if (this.length === 0) {
          this.tail = null
      }
      return currentHead
  }
  // The unshift method takes a value as parameter and assigns it as the head of the list
  unshift(val) {
      const newNode = new Node(val)
      if (!this.head) {
          this.head = newNode
          this.tail = this.head
      }
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
  }
  // The get method takes an index number as parameter and returns the value of the node at that index
  get(index) {
      if(index < 0 || index >= this.length) return null
      const counter = 0
      const current = this.head
      while(counter !== index) {
          current = current.next
          counter++
      }
      return current
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
      const foundNode = this.get(index)
      if (foundNode) {
          foundNode.val = val
          return true
      }
      return false
  }
  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
  insert(index, val) {
      if (index < 0 || index > this.length) return false
      if (index === this.length) return !!this.push(val)
      if (index === 0) return !!this.unshift(val)

      const newNode = new Node(val)
      const prev = this.get(index - 1)
      const temp = prev.next
      prev.next = newNode
      newNode.next = temp
      this.length++
      return true
  }
  // The remove method takes an index number as parameter and removes the node at the given index in the list
  remove(index) {
      if(index < 0 || index >= this.length) return undefined
      if(index === 0) return this.shift()
      if(index === this.length - 1) return this.pop()
      const previousNode = this.get(index - 1)
      const removed = previousNode.next
      previousNode.next = removed.next
      this.length--
      return removed
  }
  // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
  reverse(){
    const node = this.head
    this.head = this.tail
    this.tail = node
    let next
    const prev = null
    for(let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

// const queue = [1,2,3,4,5];
// queue.pop();
// console.log(queue);
// var relativeSortArray = function(arr1, arr2) {
//     arr2.sort(); 
//     console.log(arr2);
//     return arr1;
//   };

//   let arr1 = [];
//   let arr2 = [5,3,1];

//   relativeSortArray(arr1,arr2);

// //merge function takes in 2 sorted arrays (array lengths of 1) and returns 1 merged sorted array
// const merge = (l,r) => {
//     const output =[];
//     let i = 0;
//     let j = 0;

//     while(i < l.length && j < r.length){
//         // const le = left[i];
//         // const re = right[j];

//         // if(le < re){
//         if(l[i] < r[j]){
//             // output.push(le);
//             output.push(l[i]);
//             i++;
//         }
//         //else if here or just else???
//         else{
//             // output.push(re);
//             output.push(r[j]);
//             j++;
//         }
//     }

//     return [...output, ...l.slice(i), ...r.slice(j)];
// }



// //mergeSort takes in 1 array and divides into 2 subarrays until they both are lengths 1 (considered sorted)
// const mergeSort = a => {
//     //base case
//     if(a.length <= 1) return a; //this stops the while loop recursion when lengths are 1 (sorted) to the bottom

//     //middle index
//     //const middleIndex = Math.floor(array.length / 2);
//     const m = Math.ceil(a.length / 2);
//     //console.log(mid);

//     //create 2 subarrays
//     const l = a.slice(0, m); //slice() take in a start or start/end and copies and returns a new reference to the same array not a new array
//     const r = a.slice(m); //end is not inclusive for slice

//     return merge(mergeSort(l),mergeSort(r));
// }

// //test data: negative number, zero, duplicates, odd lengths
// console.log(mergeSort([5,2,-1,0,5]));
// //console.log(mergeSort([5,2,1,0,6]));
// //console.log(merge([2,4,5],[6,8])); //these need to be sorted!
// //console.log(merge([0,4,5],[-1,5,6,8])); //these need to be sorted!

// // function mergeSort(array){

// //     return array;
// // }

// // mergeSort([3,5,2,-1,0]);
// /*

// 1. split down to 1 length arrays
//      [3,5,2,-1,0]
//      /         \
//  [3,5,2]       [-1,0]
//    / \          /  \
//   [3,5] [2]    [-1] [0]
//   /  \   \    
// [3] [5] [2]  

// 2. merge up 2 arrays
// [3] [5] [2]      [-1] [0]
//   /      \          \
// [3,5]    [2]       [-1,0]
//  \       / 
//   [3,3,5]

// */
