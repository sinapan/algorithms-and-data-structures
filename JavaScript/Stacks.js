class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
	}
}

class Stack {
	constructor() {
		this.last = null;
		this.length = 0;
	}

	push(newNodeVal) {
		let newNode = new Node(newNodeVal);
		newNode.prev = this.last;
		this.last = newNode;
		this.length++;
		return this.length;
	}

	pop() {
		if (this.length === 0) return null;
		let removedNode = this.last;
		this.last = removedNode.prev;
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
