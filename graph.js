const HashTable = require('./hash-table')

module.exports = function Graph () {
  const nodes = []

  function addNode (value) {
    const node = new HashTable()
    node.set('value', value)
    node.set('nodes', [])
    nodes.push(node)
  }

  function addLine (start, end) {
    const startNode = find(start)
    const endNode = find(end)

    if (!startNode || !endNode) {
      return
    }

    startNode.get('nodes').push(endNode)
  }

  function find (value) {
    return nodes.find(n => n.get('value') === value)
  }

  return { addNode, addLine, find }
}
