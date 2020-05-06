const HashTable = require('./hash-table')

module.exports = function LinkedList () {
  let head = 0

  function get (position) {
    let current = head
    for (let i = 0; i < position; i++) {
      current = current.get('next')
    }

    return current
  }

  function set (value, position) {
    const node = new HashTable()
    node.set('value', value)
    node.set('next', null)

    if (position === 0) {
      head = node
      return
    }
    const prev = get(position - 1)
    const next = prev.get('next')
    prev.set('next', node)
    node.set('next', next)
  }

  function remove (position) {
    const prev = get(position-1)
    const next = get(position+1)

    prev.set('next', next)
  }

  return { get, set, remove }
}
