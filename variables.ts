/** Annotation for variables */

const color = 'azul' // mouse hover: const color: "azul"
let esBonito = true // mouse hover: let esBonito: boolean

const manzanas: number = 5 // mouse hover: const manzanas: number
let nada: undefined = undefined // mouse hover: let nada: undefined

// built in Object
let now: Date = new Date() // let now: Date
const nowDate = new Date() // const nowDate: Date

// Array
let colors: string[] = ['roja = red', 'azul = blue', 'marrón = brown']
// mouse hover: let colors: string[]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10, // mouse hover: (property) y: number
  y: 20 // mouse hover: (property) y: number
}

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n)
}

/** When to use Annotations?
 *
 * 1. When a function returns the 'any' type
 *    and we need to clarify the value. */

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}
