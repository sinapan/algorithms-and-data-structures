class dataNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class singlyLinkedList {
	constructor() {
		this.ptr_head = null;
		this.ptr_tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new dataNode(val);
		if (!this.ptr_head) {
			this.ptr_tail = newNode;
			this.ptr_head = this.ptr_tail;
		} else {
			this.ptr_tail.next = newNode;
			this.ptr_tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.ptr_head) return undefined;
		let currentNode = this.ptr_head;
		while (currentNode.next) {
			if (currentNode.next === this.ptr_tail) {
				break;
			} else {
				currentNode = currentNode.next;
			}
		}
		let deletedNode = this.ptr_tail;
		currentNode.next = null;
		this.ptr_tail = currentNode;
		this.length--;
		if (this.length === 0) {
			this.ptr_head = null;
			this.ptr_tail = null;
		}
		return deletedNode;
	}

	shift() {
		if (!this.ptr_head) return undefined;
		let deletedNode = this.ptr_head;
		this.ptr_head = this.ptr_head.next;
		this.length--;
		if (this.length === 0) {
			// this.ptr_head = null;
			this.ptr_tail = null;
		}
		return deletedNode;
	}

	unshift(newNodeVal) {
		let newNode = new dataNode(newNodeVal);
		newNode.next = this.ptr_head;
		this.ptr_head = newNode;
		this.length++;
		if (this.length === 1) this.ptr_tail = this.ptr_head;
		return this;
	}

	get(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return undefined;
		let currentNode = this.ptr_head;
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

	insert(newNodeID, newNodeValue) {
		if (newNodeID < 0 || newNodeID > this.length) return false;
		if (newNodeID === this.length) return !!this.push(newNodeValue);
		if (newNodeID === 0) return !!this.unshift(newNodeValue);
		let newNode = new dataNode(newNodeValue);
		let previousNode = this.get(newNodeID - 1);
		newNode.next = previousNode.next;
		previousNode.next = newNode;
		this.length++;
		return true;
	}

	remove(nodeID) {
		if (nodeID < 0 || nodeID >= this.length) return undefined;
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
		let currentNode = this.ptr_head;
		let futureNode = undefined;
		this.ptr_head = this.ptr_tail;
		this.ptr_tail = currentNode;
		for (let i = 0; i < this.length; i++) {
			futureNode = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = futureNode;
		}
		return this;
	}

	print() {
		let currentNode = this.ptr_head;
		let arr = [];
		while (currentNode) {
			arr.push(currentNode.val);
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
