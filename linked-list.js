const HashTable = require('./hash-table')

module.exports = function LinkedList () {
  this.head = null

  this.get = function get (position) {
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.get('next')
    }

    return current
  }

  this.set = function set (value, position) {
    const node = new HashTable()
    node.set('value', value)
    node.set('next', null)

    if (position === 0) {
      this.head = node
      return
    }
    const prev = this.get(position - 1)
    const next = prev.get('next')
    prev.set('next', node)
    node.set('next', next)
  }

  this.remove = function remove (position) {
    const prev = this.get(position-1)
    const next = this.get(position+1)

    prev.set('next', next)
  }
}
