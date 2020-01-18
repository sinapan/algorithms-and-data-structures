class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

exports.BinarySearchTree = class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let currentNode = this.root;
			while (true) {
				if (val === currentNode.val) {
					console.log('ignoring duplicates...');
					return this;
				} else if (val < currentNode.val) {
					if (currentNode.left === null) {
						currentNode.left = newNode;
						return this;
					} else {
						currentNode = currentNode.left;
					}
				} else if (val > currentNode.val) {
					if (currentNode.right === null) {
						currentNode.right = newNode;
						return this;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}

	find(val) {
		if (this.root === null) return false;
		let currentNode = this.root;
		while (currentNode) {
			if (val === currentNode.val) {
				return currentNode;
			} else if (val < currentNode.val) {
				currentNode = currentNode.left;
			} else if (val > currentNode.val) {
				currentNode = currentNode.right;
			}
		}
		return false;
	}
};

// // TEST
// let obj = new BinarySearchTree();
// console.log('+++++++++++++++');
// console.log(obj);
// console.log('---------------');
// obj.insert(10);
// obj.insert(5);
// obj.insert(13);
// obj.insert(10);
// obj.insert(2);
// obj.insert(7);
// obj.insert(11);
// obj.insert(16);
// console.log(obj);
// console.log('---------------');
// ans = obj.find(0);
// console.log(ans);
// console.log('---------------');
// ans = obj.find(10);
// console.log(ans);
// console.log('---------------');
// ans = obj.find(5);
// console.log(ans);
