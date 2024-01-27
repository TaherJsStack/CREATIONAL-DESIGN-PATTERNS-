abstract class Car {
    constructor(public modal: string, public productionYear: number) {}
    abstract displayCarInfo(): void;
}

class BMW extends Car {
    public displayCarInfo(): void {
        console.log(`this BMW Modal: ${this.modal} && Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {
    public displayCarInfo(): void {
        console.log(`this SUV Modal: ${this.modal} && Production Year: ${this.productionYear}`);
    }
}

class CarFactory{
    public createCar(
        type: 'BMW' | 'SUV' ,
        modal: string, 
        productionYear: number,
        ): Car {
            switch (type) {
                case 'BMW':
                    return new BMW(modal, productionYear);
                case 'SUV':
                    return new SUV(modal, productionYear);
                default:
                    throw new Error (`Invalid type: ${type}`); 
            }
     
    }
}

let carFactory:CarFactory = new CarFactory();
 
// console.log('carFactory ---> ', carFactory.createCar('BMW', 'BM', 2022))
let BMWCar = carFactory.createCar('BMW', 'BM', 2022)
BMWCar.displayCarInfo()

console.log('--------------------------------------------')

// console.log('carFactory ---> ', carFactory.createCar('SUV', 'BM00', 2022))
let SUVCar = carFactory.createCar('SUV', 'BM00', 2022)
SUVCar.displayCarInfo()
