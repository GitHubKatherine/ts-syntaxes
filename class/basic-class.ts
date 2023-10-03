/**
 * Class
 *
 */

class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }

  honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom')
  }
}

const car = new Car()
car.drive() // vroom
car.honk() // beep

// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()
