function List () {
  this.memory = []
  this.length = 0

  this.get = function get (i) {
    return this.memory[i]
  }

  this.push = function push (value) {
    this.memory[this.length] = value
    this.length++
  }

  this.pop = function pop () {
    this.length--
    const lastValue = this.memory[this.length]
    delete this.memory[this.length]
    return lastValue
  }

  this.unshift = function unshift (value) {
    this.length++
    for (let i = 1; i < this.length; i++) {
      this.memory[i] = this.memory[i-1]
    }
    this.memory[0] = value
  }

  this.shift = function shift () {
    if (this.length === 0) {
      return
    }
    const firstValue = this.memory[0]
    this.length--;
    for (let i = 0; i < this.length; i++) {
      this.memory[i] = this.memory[i+1]
    }
    delete this.memory[this.length]
    return firstValue
  }
}

function HashTable () {
  this.memory = []

  function hashKey (data) { // Adler 32
    let a = 1, b = 0;
    for (let i = 0; i < data.length; i++)  {
        a = (a + data[i]) % 65521;
        b = (b + a) % 65521;
    }
    return a | (b << 16);
  }

  this.get = function get (key) {
    return this.memory[hashKey(key)]
  }

  this.set = function set (key, value) {
    this.memory[hashKey(key)] = value
  }

  this.remove = function remove (key) {
    delete this.memory[hashKey(key)]
  }
}

const h = new HashTable()
h.set("test", "hello does this work?")
h.set("test2", "hello does this work?")
console.log(h.get("test"))
h.remove("test2")
console.log(h.get("test2"))
