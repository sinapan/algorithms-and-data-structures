// exports.BinaryHeap =
class BinaryHeap {
	constructor() {
		this.values = [];
		this.type = 'max'; // 'max' or 'min'
	}
	insert(element) {
		this.values.push(element);
		let element_id = this.values.length - 1;
		this.correctElementPosition(this.type, element_id);
	}
	correctElementPosition(type, element_id) {
		if (element_id === 0) return this.values;
		let parent_id = Math.floor((element_id - 1) / 2);
		if (parent_id < 0) throw console.error('negative parent_id!');
		if (type.toLowerCase() === 'max') {
			if (this.values[element_id] > this.values[parent_id]) {
				let temp = this.values[element_id];
				this.values[element_id] = this.values[parent_id];
				this.values[parent_id] = temp;
				this.correctElementPosition(type, parent_id);
			} else {
				return this.values;
			}
		} else if (type.toLowerCase() === 'min') {
			if (this.values[element_id] < this.values[parent_id]) {
				let temp = this.values[element_id];
				this.values[element_id] = this.values[parent_id];
				this.values[parent_id] = temp;
				this.correctElementPosition(type, parent_id);
			} else {
				return this.values;
			}
		} else throw console.error('undefined heap type!');
	}
}

// // TEST
// let obj = new BinaryHeap();
// console.log('+++++++++++++++');
// console.log(obj);
// console.log('---------------');
// obj.insert(41);
// obj.insert(39);
// obj.insert(33);
// obj.insert(18);
// obj.insert(27);
// obj.insert(12);
// console.log(obj);
// console.log('---------------');
// obj.insert(55);
// console.log(obj);
