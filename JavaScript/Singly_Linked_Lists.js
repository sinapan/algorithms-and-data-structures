class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.tail = newNode;
			this.head = this.tail;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return null;
		let currentNode = this.head;
		while (currentNode.next) {
			if (currentNode.next === this.tail) {
				break;
			} else {
				currentNode = currentNode.next;
			}
		}
		let deletedNode = this.tail;
		currentNode.next = null;
		this.tail = currentNode;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return deletedNode;
	}

	shift() {
		if (this.length === 0) return null;
		let deletedNode = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			// this.head = null;
			this.tail = null;
		}
		return deletedNode;
	}

	unshift(newNodeVal) {
		let newNode = new Node(newNodeVal);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		if (this.length === 1) this.tail = this.head;
		return this;
	}

	get(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return null;
		let currentNode = this.head;
		for (let currentID = 0; currentID < this.length; currentID++) {
			if (currentID === nodeID) return currentNode;
			currentNode = currentNode.next;
		}
	}

	set(nodeID, nodeVal) {
		let currentNode = this.get(nodeID);
		if (currentNode) {
			currentNode.val = nodeVal;
			return true;
		}
		return false;
	}

	insert(newNodeID, newNodeVal) {
		if (newNodeID < 0 || newNodeID > this.length) return false;
		if (newNodeID === this.length) return !!this.push(newNodeVal);
		if (newNodeID === 0) return !!this.unshift(newNodeVal);
		let newNode = new Node(newNodeVal);
		let previousNode = this.get(newNodeID - 1);
		newNode.next = previousNode.next;
		previousNode.next = newNode;
		this.length++;
		return true;
	}

	remove(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return null;
		if (nodeID === this.length - 1) return this.pop();
		if (nodeID === 0) return this.shift();
		let previousNode = this.get(nodeID - 1);
		let removedNode = previousNode.next;
		previousNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	reverse() {
		let previousNode = null;
		let currentNode = this.head;
		let futureNode = null;
		this.head = this.tail;
		this.tail = currentNode;
		for (let i = 0; i < this.length; i++) {
			futureNode = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = futureNode;
		}
		return this;
	}

	print() {
		let currentNode = this.head;
		let arr = [];
		while (currentNode) {
			arr.push(currentNode);
			currentNode = currentNode.next;
		}
		console.log(arr);
		return arr;
	}
}

// // TEST
// let sll = new singlyLinkedList();
// console.log('+++++++++++++++');
// console.log(sll);
// console.log('---------------');
// sll.push('node1');
// sll.push('node2');
// sll.push('node3');
// console.log(sll);
// console.log('---------------');
// ans = sll.print();
// ans = sll.reverse();
// ans = sll.print();
// // ans = sll.unshift('node3');
// console.log(ans);
// console.log('---FINAL OBJ---');
// console.log(sll);
