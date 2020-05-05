module.exports = function List () {
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
    if (this.length === 0) {
      return
    }
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

