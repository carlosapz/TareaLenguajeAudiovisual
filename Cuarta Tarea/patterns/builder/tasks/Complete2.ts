// class Vehicle {
//     type: string;
//     engine: string;
//     wheels: number;
//     color: string;
//     brand: string;
//     fuel: string;

//     constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
//         this.type = type;
//         this.engine = engine;
//         this.wheels = wheels;
//         this.color = color;
//         this.brand = brand;
//         this.fuel = fuel;
//     }
// }

// const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');


class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(builder: VehicleBuilder) {
        this.type = builder.type;
        this.engine = builder.engine;
        this.wheels = builder.wheels;
        this.color = builder.color;
        this.brand = builder.brand;
        this.fuel = builder.fuel;
    }

    displayInformation(): void {
        console.log(`Type: ${this.type}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Color: ${this.color}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Fuel: ${this.fuel}`);
    }
}

class VehicleBuilder {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string, engine: string, wheels: number) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
    }

    setColor(color: string): VehicleBuilder {
        this.color = color;
        return this;
    }

    setBrand(brand: string): VehicleBuilder {
        this.brand = brand;
        return this;
    }

    setFuel(fuel: string): VehicleBuilder {
        this.fuel = fuel;
        return this;
    }

    build(): Vehicle {
        return new Vehicle(this);
    }
}


const myCar = new VehicleBuilder('car', 'V8', 4)
    .setColor('red')
    .setBrand('Ford')
    .setFuel('gasoline')
    .build();

myCar.displayInformation();
