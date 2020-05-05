module.exports = function Graph () {
  this.nodes = []

  this.addNode = function addNode (value) {
    this.nodes.push({
      value,
      nodes: []
    })
  }

  this.addLine = function addLine (start, end) {
    const startNode = this.find(start)
    const endNode = this.find(end)

    if (!startNode || !endNode) {
      return
    }

    startNode.nodes.push(endNode)
  }

  this.find = function find (value) {
    return this.nodes.find(n => n.value === value)
  }
}
