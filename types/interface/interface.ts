interface Reportable {
  summary(): string
}

interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string
}

// drink = Reportable
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}
// drink = Reportable
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

/** 
  const printVehicle = (vehicle: {
   name: string
   year: number
   broken: boolean
 }): void => {
   console.log(`Name: ${vehicle.name}`)
   console.log(`Year: ${vehicle.year}`)
   console.log(`broken: ${vehicle.broken}`)
 } */

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printVehicle(oldCivic)
printSummary(drink)
