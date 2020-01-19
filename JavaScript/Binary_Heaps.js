exports.BinaryHeap = class BinaryHeap {
	constructor() {
		this.values = [];
		this.type = 'max'; // 'max' or 'min'
	}
	insert(element) {
		this.values.push(element);
		let element_id = this.values.length - 1;
		this.bubbleUp(this.type, element_id);
	}
	bubbleUp(type, element_id) {
		if (element_id === 0) return this.values;
		let parent_id = Math.floor((element_id - 1) / 2);
		if (parent_id < 0) throw console.error('negative parent_id!');
		if (type.toLowerCase() === 'max') {
			if (this.values[element_id] > this.values[parent_id]) {
				this.values = this.swapArrElements(element_id, parent_id, this.values);
				this.bubbleUp(type, parent_id);
			} else {
				return this.values;
			}
		} else if (type.toLowerCase() === 'min') {
			if (this.values[element_id] < this.values[parent_id]) {
				this.values = this.swapArrElements(element_id, parent_id, this.values);
				this.bubbleUp(type, parent_id);
			} else {
				return this.values;
			}
		} else throw console.error('undefined heap type!');
	}
	extractMax() {
		if (this.values.length === 0) return undefined;
		const max = this.values[0];
		const last = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = last;
			this.values = this.sinkDown(this.values, 0);
		}
		return max;
	}
	sinkDown(values, parent_id) {
		let child1_id = 2 * parent_id + 1;
		child1_id = child1_id >= values.length ? null : child1_id;
		let child2_id = 2 * parent_id + 2;
		child2_id = child2_id >= values.length ? null : child2_id;
		let idMax = this.findMaxElementId(parent_id, child1_id, child2_id, values);

		if (parent_id === idMax) return values;

		values = this.swapArrElements(parent_id, idMax, values);
		values = this.sinkDown(values, idMax);
		return values;
	}
	swapArrElements(id1, id2, arr) {
		let temp = arr[id1];
		arr[id1] = arr[id2];
		arr[id2] = temp;
		return arr;
	}
	findMaxElementId(id1, id2, id3, arr) {
		let idMax;
		if (id1 !== null) idMax = id1;
		if (id2 !== null && arr[id2] > arr[id1]) idMax = id2;
		if (id3 !== null && ((idMax == id1 && arr[id3] > arr[id1]) || (idMax == id2 && arr[id3] > arr[id2])))
			idMax = id3;
		return idMax;
	}
};

// // TEST
// let obj = new BinaryHeap();
// console.log('+++++++++++++++');
// console.log(obj);
// console.log('init---------------');
// obj.insert(41);
// obj.insert(39);
// obj.insert(33);
// obj.insert(18);
// obj.insert(27);
// obj.insert(12);
// console.log(obj);
// console.log('insert---------------');
// obj.insert(55);
// console.log(obj);
// console.log('extractMax---------------');
// let maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
// maxVal = obj.extractMax();
// console.log(obj);
// console.log(`max: ${maxVal}`);
