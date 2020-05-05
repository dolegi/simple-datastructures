const HashTable = require('./hash-table')

module.exports = function Graph () {
  this.nodes = []

  this.addNode = function addNode (value) {
    const node = new HashTable()
    node.set('value', value)
    node.set('nodes', [])
    this.nodes.push(node)
  }

  this.addLine = function addLine (start, end) {
    const startNode = this.find(start)
    const endNode = this.find(end)

    if (!startNode || !endNode) {
      return
    }

    startNode.get('nodes').push(endNode)
  }

  this.find = function find (value) {
    return this.nodes.find(n => n.get('value') === value)
  }
}
