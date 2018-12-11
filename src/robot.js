const shortid = require('shortid');

console.log(shortid.generate());


class Robot {
  constructor(description = null) {
    console.log('Yo, I am a new robot')
    this._id = shortid.generate()
    this._description = description
    this._network = []
  }

  get id() {
    return this._id
  }
  set id(val) {
    throw new Error('You cannot do that')
  }
  get description() {
    return this._description
  }
  set description(val) {
    if (!val) throw new Error('Description cannot be empty')
    this._description = val
  }
  get network() {
    return this._network
  }
  set network(val) {
    throw new Error('This is a network error')
  }

  meet(otherRobot) {
    if (otherRobot instanceof Robot) {
      this._network.push(otherRobot.id)
    } else {
      throw new Error('Must meet another robot.')
    }
    // check to make sure other robot is an instance of Robot
    // if so add to our network
    // else, throw error
  }

}








module.exports = Robot