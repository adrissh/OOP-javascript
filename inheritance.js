
// OOP Javascript ES6

class Car{
    carName = 'Yaris'  // default value
    constructor(brand,type,color,carName){ 
        this.brand = brand
        this.type = type
        this.color = color
        this.carName = carName || this.carName  // give value  or dafault value 
    }

    startEnginee(){
        return `Nyalakan mesin mobil ${this.brand} ${this.carName} `
    }

}

class Tesla extends Car {
    constructor(brand,type,color,carName,kWh){
        super()
        this.brand = brand
        this.type = type
        this.color = color
        this.carName = carName
        this.kWh = kWh
    }
    
}

const Fortuner = new Tesla('Wuling','Manual','Silver','Almaz',300000)
console.log("🚀 ~ Fortuner:", Fortuner.startEnginee())

const Ertiga = new Car('Suzuki','Matic','White','Ertiga')
console.log("🚀 ~ Ertiga:", Ertiga.startEnginee())


