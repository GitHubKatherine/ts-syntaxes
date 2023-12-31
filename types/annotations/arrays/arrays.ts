/**
 * Q: When to use typed arrays?
 * A: Any time we need to represent a collection of records
 *    with some arbitrary sort order.
 *
 */

const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']]
const carsByMake2: string[][] = []

// Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = []
importantDates.push('2030-10-10')
importantDates.push(new Date())
