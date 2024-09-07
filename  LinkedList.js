class LinkedList {

  constructor() {
    this.node = {};
    this.counter = 0;
  }

  push(node) {
    this.node[this.counter + 1] = node;
    this.counter++;
  }

  pop() {
    let value = this.node[this.counter]
    if (value === undefined) {
      return
    }
    delete this.node[this.counter];
    this.counter--;
    return value;
  }

  shift() {
    let value = this.node["1"]
    if (value === undefined) {
      return
    }
    delete this.node["1"];
    this.counter--;
    const newNode = {};
    for (let key in this.node) {
      newNode[key - 1] = this.node[key];
    }
    this.node = newNode;
    return value;
  }

  unshift(value) {
    this.counter++;
    const newNode = {};
    newNode[1] = value;
    for (let key in this.node) {
      newNode[Number(key) + 1] = this.node[key];
    }
    this.node = newNode;
  }

  delete(value) {
    let key = -1;

    for (let index in this.node) {
      if (this.node[index] === value) {
        key = index;
      }
    }

    if (key === -1) {
      return
    }

    for (key; key < this.counter; key++) {
      this.node[key] = this.node[Number(key) + 1];
    }
    this.pop()
  }

  count() {
    return this.counter;
  }
}

const linkedList = new LinkedList();

linkedList.push(5);
linkedList.push(1);
//console.log(linkedList)
linkedList.unshift(14);
linkedList.unshift(12);
console.log(linkedList)

linkedList.delete(12);
linkedList.delete(12);
linkedList.delete(12);


console.log(linkedList)