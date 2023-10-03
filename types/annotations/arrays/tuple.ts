/**
 * Tuple: Array-like structure where each element
 * - represents some property of a record  */

const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 40
}

//  Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]
pepsi[0] = 10 // Error: Type 'number' is not assignable to type 'string

// Type alias

type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 40]
