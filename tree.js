const HashTable = require('./hash-table')
const List = require('./list')

module.exports = function Tree () {
  let root = null

  function traverse (fn) {
    function walk (node) {
      fn(node)

      for (let i = 0; i < node.get('children').length(); i++) {
        walk(node.get('children').get(i))
      }
    }

    walk(root)
  }

  function add (value, parent) {
    const node = new HashTable()
    node.set('value', value)
    node.set('children', new List())

    if (root === null) {
      root = node
      return
    }

    traverse(n => {
      if (n.get('value') === parent) {
        n.get('children').push(node)
      }
    })
  }

  function get (value, node = root) {
    if (node.get('value') === value) {
      return node
    }

    for (let i = 0; i < node.get('children').length(); i++) {
      const foundNode = get(value, node.get('children').get(i))
      if (foundNode) {
        return foundNode
      }
    }
    return false
  }

  return { add, get }
} 
