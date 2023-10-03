/**
 * public: Be called any where, any time
 *
 * private: Only be called by other methods in the class
 *
 * protected: Can be called by other methods in the class,
 *            or by other methods in child classes.
 */

class Vehicle {
  private honk(): void {
    console.log('beep')
  }
  protected honk2(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle()
vehicle.honk() // cannot be accessed by anywhere outside of child classes

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive
    this.honk // Error: Property 'honk' is private and only accessible within class 'Vehicle'
    this.honk2 // Can be called by other methods in child classes.
  }
}

const car = new Car()
car.startDrivingProcess()
car.honk() // beep
