module.exports = function List () {
  const memory = []
  let length = 0

  function get (i) {
    return memory[i]
  }

  function push (value) {
    memory[length] = value
    length++
  }

  function pop () {
    if (length === 0) {
      return
    }
    length--
    const lastValue = memory[length]
    delete memory[length]
    return lastValue
  }

  function unshift (value) {
    length++
    for (let i = 1; i < length; i++) {
      memory[i] = memory[i-1]
    }
    memory[0] = value
  }

  function shift () {
    if (length === 0) {
      return
    }
    const firstValue = memory[0]
    length--;
    for (let i = 0; i < length; i++) {
      memory[i] = memory[i+1]
    }
    delete memory[length]
    return firstValue
  }

  function find (fn) {
    for (let i = 0; i < length; i++) {
      if (fn(memory[i])) {
        return memory[i]
      }
    }
  }

  return { get, push, pop, unshift, shift, find, length: () => length }
}

