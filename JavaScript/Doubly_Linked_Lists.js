class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		let removedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			removedNode.prev = null;
		}
		this.length--;
		return removedNode;
	}

	shift() {
		if (this.length === 0) return undefined;
		let removedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			removedNode.next = null;
		}
		this.length--;
		return removedNode;
	}

	unshift(newNodeVal) {
		let newNode = new Node(newNodeVal);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return undefined;
		if (nodeID <= this.length / 2) {
			let currentNode = this.head;
			for (let currentID = 0; currentID < this.length; currentID++) {
				if (currentID === nodeID) return currentNode;
				currentNode = currentNode.next;
			}
		} else {
			let currentNode = this.tail;
			for (let currentID = this.length - 1; currentID >= 0; currentID--) {
				if (currentID === nodeID) return currentNode;
				currentNode = currentNode.prev;
			}
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
		if (newNodeID === this.length) !!this.push(newNodeVal);
		if (newNodeID === 0) !!this.unshift(newNodeVal);
		let newNode = new Node(newNodeVal);
		let toBeMovedForwardNode = this.get(newNodeID);
		newNode.next = toBeMovedForwardNode;
		newNode.prev = toBeMovedForwardNode.prev;
		newNode.prev.next = newNode;
		newNode.next.prev = newNode;
		this.length++;
		return true;
	}

	remove(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return undefined;
		if (nodeID === this.length - 1) return this.pop();
		if (nodeID === 0) return this.shift();
		let removedNode = this.get(nodeID);
		let nextNode = removedNode.next;
		let prevNode = removedNode.prev;
		nextNode.prev = prevNode;
		prevNode.next = nextNode;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}

	reverse() {
		[ this.head, this.tail ] = [ this.tail, this.head ];
		let currentNode = this.head;
		for (let i = 0; i < this.length; i++) {
			[ currentNode.next, currentNode.prev ] = [ currentNode.prev, currentNode.next ];
			currentNode = currentNode.next;
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

// TEST
// let sll = new DoublyLinkedList();
// console.log('+++++++++++++++');
// console.log(sll);
// console.log('---------------');
// sll.push('node1');
// sll.push('node2');
// sll.push('node3');
// console.log(sll);
// console.log('---------------');
// // ans = sll.print();
// // console.log(ans);
// console.log('---FINAL OBJ---');
// console.log(sll);
