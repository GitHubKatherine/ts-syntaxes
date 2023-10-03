// const add = (a: number, b: number): number => a + b
const add = (a: number, b: number) => a + b

function divide(a: number, b: number): number {
  return a / b
} // mouse hover: function divide(a: number, b: number): number

// Anonymous function
const multiply = function (a: number, b: number): number {
  return a * b
} // mouse hover: const multiply: (a: number, b: number) => number

// Type: void = a function that's going to not return anything.
const logger = (messages: string): void => {
  console.log(messages)
}

// Type: never = we expect it to return something eventually
// and only possibly throw an error.
const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

// ES2015
const logWeather2 = ({ date, weather }) => {
  console.log(date)
  console.log(weather)
}

// Destructuring with an annotation

const logWeather3 = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
