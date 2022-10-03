abstract class Car {
  public description: string = ""

  public getDescription(): string{
    return this.description
  }

  public abstract cost(): number
}

class ModelS extends Car {
  public description = "Model S"

  public cost(): number {
    return 7000
  }
}

class ModelX extends Car {
  public description = "Model X"

  public cost(): number {
    return 10000
  }
}

abstract class CarOption extends Car {

  public abstract getDescription(): string
  public abstract cost(): number
}

class EnhansedCar extends CarOption {
  decorateCar: Car

  constructor(car: Car) {
    super()
    this.decorateCar = car
  }

  public getDescription(): string {
    return this.decorateCar.getDescription() + ' ,Enhancment'
  }

  public cost(): number {
    return this.decorateCar.cost() + 5000
  }
}

let myCar = new ModelS()
myCar = new EnhansedCar(myCar)
console.log(myCar.cost())
console.log(myCar.getDescription())
