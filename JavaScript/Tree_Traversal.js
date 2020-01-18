const BST = require('./Binary_Search_Trees.js');
const QUEUE = require('./Queues.js');

function breadthFirstSearch(tree) {
	let queue = new QUEUE.Queue();
	let visited = new QUEUE.Queue();
	let current_node = tree.root;
	queue.enqueue(current_node);
	while (queue.length != 0) {
		current_node = queue.dequeue();
		visited.enqueue(current_node);
		if (current_node.left) queue.enqueue(current_node.left);
		if (current_node.right) queue.enqueue(current_node.right);
	}
	return visited;
}

function deapthFirstSearch_PreOrder(tree) {
	let current_node = tree.root;
	let visited = new QUEUE.Queue();
	function visitNode(current_node, visited) {
		visited.enqueue(current_node);
		if (current_node.left) visited = visitNode(current_node.left, visited);
		if (current_node.right) visited = visitNode(current_node.right, visited);
		return visited;
	}
	visited = visitNode(current_node, visited);
	return visited;
}

function deapthFirstSearch_PostOrder(tree) {
	let current_node = tree.root;
	let visited = new QUEUE.Queue();
	function visitNode(current_node, visited) {
		if (current_node.left) visited = visitNode(current_node.left, visited);
		if (current_node.right) visited = visitNode(current_node.right, visited);
		visited.enqueue(current_node);
		return visited;
	}
	visited = visitNode(current_node, visited);
	return visited;
}

function deapthFirstSearch_InOrder(tree) {
	let current_node = tree.root;
	let visited = new QUEUE.Queue();
	function visitNode(current_node, visited) {
		if (current_node.left) visited = visitNode(current_node.left, visited);
		visited.enqueue(current_node);
		if (current_node.right) visited = visitNode(current_node.right, visited);
		return visited;
	}
	visited = visitNode(current_node, visited);
	return visited;
}

// // ############# TESTS
let tree = new BST.BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(14);
tree.insert(20);
// console.log(tree);
// visited = breadthFirstSearch(tree);
// visited = deapthFirstSearch_PreOrder(tree);
// visited = deapthFirstSearch_PostOrder(tree);
visited = deapthFirstSearch_InOrder(tree);
// console.log(visited);
let node = visited.first;
console.log(node.val);
while (node.next) {
	node = node.next;
	console.log(node.val);
}
