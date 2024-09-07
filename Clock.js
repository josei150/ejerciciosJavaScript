class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour
    this.minute = minute

    while (this.minute > 59) {
      this.hour += parseInt(this.minute / 60)
      this.minute = this.minute % 60;
    }

    while (this.hour > 23) {
      this.hour = this.hour % 24
    }

    while (this.minute < 0) {
      this.hour += parseInt((this.minute) / 60)
      this.minute += 60
      this.minute = this.minute % 60;
      if(this.minute > 0){
        this.hour -= 1
      }
    }

    while (this.hour < 0) {
      this.hour += 24
      this.hour = this.hour % 24

    }

  }

  toString() {
    let hour = this.hour < 10 ? this.hour = `0${this.hour}` : `${this.hour}`
    let minute = this.minute < 10 ? this.minute = `0${this.minute}` : `${this.minute}`

    return `${hour}:${minute}`
  }

  plus(minutes) {
    this.minute += minutes
    while (this.minute > 59) {
      this.hour += parseInt(this.minute / 60)
      this.minute = this.minute % 60;
    }

    while (this.hour > 23) {
      this.hour = this.hour % 24
    }

    return this
  }

  minus(minutes) {
    this.minute -= minutes
    while (this.minute < 0) {
      this.hour += parseInt((this.minute) / 60)
      this.minute += 60
      this.minute = this.minute % 60;
      if(this.minute > 0){
        this.hour -= 1
      }
    }

    while (this.hour < 0) {
      this.hour += 24
      this.hour = this.hour % 24

    }
    return this
  }

  equals(clock) {
    return this.toString() == clock.toString()
  }
}

const timeNow = new Clock(10,2)
timeNow.plus
// timeNow.minus(3000)


// hora1 = new Clock(15, 36).equals(new Clock(15, 37))
