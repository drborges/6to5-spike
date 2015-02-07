export class TraversableSet extends Set {

  constructor(...collection) {
    super(collection)
  }

  reduce(acc, reducer) {
    this.forEach(i => acc = reducer(acc, i))
    return acc
  }
}
