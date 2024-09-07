const meetup = (year, month, week, weekDay) => {
  const test = new Date(year, month, 1)
  test.setDate(0)
  const daysInMonth = test.getDate()
  month -= 1

  const days = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
  }

  const weeks = {
    "first": 1,
    "second": 2,
    "third": 3,
    "fourth": 4,
    "teenth": [13, 14, 15, 16, 17, 18, 19]
  }

  let counter = 0
  let lastDay = {}

  for (let index = 1; index <= daysInMonth; index++) {

    if (days[weekDay] === new Date(year, month, index).getDay()) {
      lastDay = new Date(year, month, index)
      counter++

      if (weeks[week] === counter || (week === "teenth" && weeks["teenth"].includes(new Date(year, month, index).getDate()))) {
        return new Date(year, month, index)//.toDateString()
      }
    }
  }

  return lastDay//.toDateString()

};



// console.log(meetup(2013, 4, 'first', 'Sunday')); //new Date(2013, 3, 7)
// console.log(meetup(2013, 4, 'fourth', 'Sunday')); //new Date(2013, 3, 28)
// console.log(meetup(2013, 3, 'last', 'Monday')); //new Date(2013, 2, 25)
// console.log(meetup(2013, 8, 'teenth', 'Monday')); //new Date(2013, 7, 19)
// console.log(meetup(2013, 5, 'third', 'Tuesday')); //new Date(2013, 4, 21)
console.log(meetup(2015, 2, 'last', 'Sunday')); //new Date(2015, 1, 22) Necesito verificar la cantidad de días del mes de forma dinámica


