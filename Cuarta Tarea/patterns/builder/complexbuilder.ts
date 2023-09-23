// Definimos una clase para la Computadora
class Computer {
    private RAM: string;
    private CPU: string;
    private HDD: string;
    private graphicsCard?: string;
    private powerSupply?: string;
    private coolingSystem?: string;

    constructor(builder: ComputerBuilder) {
        this.RAM = builder.RAM;
        this.CPU = builder.CPU;
        this.HDD = builder.HDD;
        this.graphicsCard = builder.graphicsCard;
        this.powerSupply = builder.powerSupply;
        this.coolingSystem = builder.coolingSystem;
    }

    displayConfiguration(): void {
        console.log(`RAM: ${this.RAM}, CPU: ${this.CPU}, HDD: ${this.HDD}`);
        if (this.graphicsCard) console.log(`Graphics Card: ${this.graphicsCard}`);
        if (this.powerSupply) console.log(`Power Supply: ${this.powerSupply}`);
        if (this.coolingSystem) console.log(`Cooling System: ${this.coolingSystem}`);
    }
}

class ComputerBuilder {
    RAM: string;
    CPU: string;
    HDD: string;
    graphicsCard?: string;
    powerSupply?: string;
    coolingSystem?: string;

    constructor(RAM: string, CPU: string, HDD: string) {
        this.RAM = RAM;
        this.CPU = CPU;
        this.HDD = HDD;
    }

    setGraphicsCard(card: string): ComputerBuilder {
        this.graphicsCard = card;
        return this;
    }

    setPowerSupply(ps: string): ComputerBuilder {
        this.powerSupply = ps;
        return this;
    }

    setCoolingSystem(cooling: string): ComputerBuilder {
        this.coolingSystem = cooling;
        return this;
    }

    build(): Computer {
        return new Computer(this);
    }
}

// Uso

const gamingComputer = new ComputerBuilder('32GB', 'Intel i9', '2TB SSD')
    .setGraphicsCard('NVIDIA RTX 3080')
    .setCoolingSystem('Liquid Cooling')
    .build();

gamingComputer.displayConfiguration();

const officeComputer = new ComputerBuilder('8GB', 'Intel i5', '500GB SSD').build();
officeComputer.displayConfiguration();
