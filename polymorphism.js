class Car {
    constructor(brand,color){
        this.brand = brand
        this.color = color
    }

    runCar(){
        return `Run car ${this.brand} to gear 'D' an gaspull`
    }
    reverseCar(){
        return`reverse car to 'R' slowly`
    }
}


class Toyota extends Car {
    constructor(brand,color){
        super(brand,color)
        this.brand = brand
        this.color = color
        this.type = 'manual'
    }

    runCar(gear){  // overiding 
        return `run car to gear => ${gear} and kick the gass, so is amazing type car with ${this.type} Gear`
    }  
}

const ayla = new Car('ayla','red')
console.log(ayla.runCar()) // Output: Run car ayla to gear 'D' and gas pull

console.log("========================================")
const avanza = new Toyota('avanza','Silver')
console.log("🚀 ~ avanza:", avanza.runCar(1)) 
// Output: Run car to gear => 1 and kick the gas, 
// so it's an amazing car with manual Gear

console.log("🚀 ~ avanza:", avanza.reverseCar())
 // Output: Reverse car to 'R' slowly

//  **Abstraction: I am using super() to call the constructor of the parent class and initialize properties defined in the Car class.
//   This reflects abstraction by hiding the implementation details of the parent class.

// **Inheritance: I am using extends to inherit properties and methods from the Car class into the Toyota class. 
// This allows the Toyota class to use and modify features defined in the Car class.

// **Polymorphism: I am overriding the runCar method in the Toyota class. 
// This allows the runCar method to have different behavior in the Toyota class
//  compared to its implementation in the Car class, demonstrating polymorphism.
