describe('Cell', function () {
  it('should be alive when created', function () {
    var cell = new Cell(true)
    expect(cell.isAlive).toEqual(true)
  })
  it('should not be alive when created with dead state', function () {
    var cell = new Cell(false)
    expect(cell.isAlive).toEqual(false)
  })
})
describe('Coordinates', function () {
  it('Should have location when created', function () {
    var cell = new Cell(true)
    cell.coordinates([2, 2])
    expect(cell.location).toEqual([2, 2])
  })
})
describe('birth/death', function () {
  it('Should be alive when born', function () {
    var cell = new Cell(false)
    cell.birth()
    expect(cell.isAlive).toEqual(true)
  })
  it('Should be dead when killed', function () {
    var cell = new Cell(true)
    cell.death()
    expect(cell.isAlive).toEqual(false)
  })
  describe('Grid', function () {
    it('Should be initilized when created', function () {
      expect(grid).toEqual([])
    })
  })
})
