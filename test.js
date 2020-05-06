const assert = require('assert').strict
const List = require('./list')
const HashTable = require('./hash-table')
const Graph = require('./graph')
const LinkedList = require('./linked-list')

function TestList () {
  const l = new List()

  l.push(1)
  l.push(2)
  l.push(3)
  l.push(4)

  assert.equal(l.pop(), 4)
  assert.equal(l.pop(), 3)
  assert.equal(l.pop(), 2)
  assert.equal(l.pop(), 1)
  assert.equal(l.pop(), undefined)

  l.unshift('test')
  l.unshift('test2')
  l.shift()
  l.unshift('test3')

  assert.equal(l.shift(), 'test3')
  assert.equal(l.shift(), 'test')

  console.log('List: all tests passed')
}

function TestHashTable () {
  const h = new HashTable()

  h.set('test', 'first')
  h.set('test2', 'second')
  assert.equal(h.get('test'), 'first')
  assert.equal(h.get('test2'), 'second')

  h.remove('test2')
  assert.equal(h.get('test2'), undefined)

  console.log('HashTable: all tests passed')
}

function TestGraph () {
  const g = new Graph()

  g.addNode('a')
  g.addNode('b')
  g.addNode('c')
  g.addLine('a', 'b')
  g.addLine('b', 'c')

  assert.equal(g.find('a').get('value'), 'a')
  assert.equal(g.find('a').get('nodes')[0].get('nodes')[0].get('value'), 'c')

  console.log('Graph: all tests passed')
}

function TestLinkedList () {
  const l = new LinkedList()
  l.set(1, 0)
  l.set(2, 1)
  l.set(3, 1)

  assert.equal(l.get(1).get('value'), 3)

  l.set(4, 2)
  l.set(5, 1)
  assert.equal(l.get(1).get('value'), 5)
  assert.equal(l.get(0).get('value'), 1)
  assert.equal(l.get(2).get('value'), 3)
  assert.equal(l.get(3).get('value'), 4)
  assert.equal(l.get(4).get('value'), 2)

  assert.equal(
    l.get(0)
    .get('next')
    .get('next')
    .get('next')
    .get('next')
    .get('value'), 2)

  l.remove(2)
  assert.equal(l.get(2).get('value'), 4)

  console.log('LinkedList: all tests passed')
}

TestList()
TestHashTable()
TestGraph()
TestLinkedList()
