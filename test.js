const assert = require('assert').strict
const List = require('./list')
const HashTable = require('./hash-table')

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

function TestHashTable() {
  const h = new HashTable()

  h.set('test', 'first')
  h.set('test2', 'second')
  assert.equal(h.get('test'), 'first')
  assert.equal(h.get('test2'), 'second')

  h.remove('test2')
  assert.equal(h.get('test2'), undefined)

  console.log('HashTable: all tests passed')
}

TestList()
TestHashTable()
