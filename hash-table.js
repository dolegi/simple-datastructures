module.exports = function HashTable () {
  this.memory = []

  function hashKey (data) { // Adler 32
    let a = 1, b = 0, i = 0
    while(i < data.length) {
      while(i < Math.min(data.length-i, 3850) + i) {
        a += data.charCodeAt(i) & 0xFF
        b += a
        i++
      }
      a = (15*(a>>>16)+(a&65535))
      b = (15*(b>>>16)+(b&65535))
    }
    return ((b%65521) << 16) | (a%65521);
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
