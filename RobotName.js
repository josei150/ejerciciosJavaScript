const listOfRobotsNames = []

class Robot {
  constructor() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lettersName = ""

    for (let index = 0; index < 2; index++) {
      lettersName += letters.charAt(Math.floor(Math.random() * letters.length))
    }

    this.robotName = lettersName + Math.floor(Math.random() * 899 + 100)

    while (listOfRobotsNames.includes(this.robotName)) {
      this.robotName = lettersName + Math.floor(Math.random() * 899 + 100)
    }

    listOfRobotsNames.push(this.robotName)
  }

  get name() {
    return this.robotName
  }

  reset() {
    this.robotName = new Robot().robotName;
    listOfRobotsNames.push(this.robotName)
  }
}

Robot.releaseNames = () => { };

const robot = new Robot()
//const robot2 = new Robot()
console.log(robot.name)
robot.reset()

for (let i = 0; i < 10; i += 1) {
  robot.reset();
}
//console.log(robot2.name)
console.log(listOfRobotsNames)
const a = new Set(listOfRobotsNames)
console.log(a.size)
console.log(robot.name)

//console.log(robot2.listOfRobotsNames)

