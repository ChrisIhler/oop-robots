const {
  expect
} = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', function () {
      const robotA = new Robot()
      const robotB = new Robot()
      expect(robotA.id).to.not.equal(robotB)
    })
    it('should allow for a description property to be set in the constructor', function () {
      const robotA = new Robot('funny')
      expect(robotA).to.have.property('description')
      expect(robotA.description).to.equal('funny')

    })
    it('if the description is not set, it should be null', function () {
      const robotA = new Robot()
      expect(robotA.description).to.equal(null)

    })
  })

  describe('get id', function () {
    it('should return the id of the robot', function () {
      const robot = new Robot()

      expect(robot.id).to.be.ok
    })
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', function () {
      const robot = new Robot()
      const actual = () => robot.id = 1

      expect(actual).to.throw()
    })
  })

  describe('get description', function () {
    it('should return the description', function () {
      const robot = new Robot('big')
      expect(robot.description).to.be.ok
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', function () {
      const robot = new Robot()
      const actual = () => robot.description = ''

      expect(actual).to.throw()
    })
    it('should set the description of the robot', function () {
      const desc = 'this is description'
      const robot = new Robot(desc)

      const update = 'ubdated'
      robot.description = update

      expect(robot.description).to.equal(update)
    })
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met', function () {
      const robotA = new Robot()
      const robotB = new Robot()
      expect(robotA.network).to.deep.equal([])

      robotA.meet(robotB)
      expect(robotA.network.length).to.equal(1)
      expect(robotA.network[0]).to.equal(robotB.id)
      // add a test with the meet function
    })
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network', function () {
      const robot = new Robot()
      const actual = () => robot.network = null

      expect(actual).to.throw()
    })
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot', function () {
      const robotA = new Robot()
      const robotB = new Robot()

      const actual = () => robotA.meet(robotB)
      expect(actual).to.not.throw
    })
    it('should throw an error if the inserted value is not a robot instance', function () {
      const robot = new Robot()

      const actual = () => robot.meet(null)

      expect(actual).to.throw
    })
    it('should add the robots ids to each other\'s networks', function () {
      const robotA = new Robot()
      const robotB = new Robot()

      robotA.meet(robotB)
      console.log(robotA.network[0], robotB.id)
      expect(robotA.network[0]).to.equal(robotB.id)
    })
  })
})