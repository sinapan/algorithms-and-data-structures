class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(newNodeVal) {
		let newNode = new Node(newNodeVal);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this.length;
	}

	dequeue() {
		if (this.length === 0) return null;
		let removedNode = this.first;
		this.first = removedNode.next;
		if (this.length === 1) this.last = null;
		this.length--;
		return removedNode.val;
	}
}

// // TEST
// let obj = new Stack();
// console.log('+++++++++++++++');
// console.log(obj);
// console.log('---------------');
// obj.push('node1');
// obj.push('node2');
// obj.push('node3');
// console.log(obj);
// console.log('---------------');
// obj.pop();
// console.log(obj);
// console.log('---------------');
// obj.pop();
// console.log(obj);
// console.log('---------------');
// obj.pop();
// console.log(obj);
