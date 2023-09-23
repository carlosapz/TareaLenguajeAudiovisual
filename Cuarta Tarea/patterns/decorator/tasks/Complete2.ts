// class Computer {
//     components: string[] = [];

//     addComponent(component: string) {
//         this.components.push(component);
//     }

//     showConfiguration() {
//         console.log(`This computer has: ${this.components.join(', ')}`);
//     }
// }

// const myComputer = new Computer();
// myComputer.addComponent('16GB RAM');
// myComputer.addComponent('1TB SSD');
// myComputer.addComponent('Intel i7 Processor');
// myComputer.showConfiguration();


interface ComputerComponent {
    showConfiguration(): void;
}

class BasicComputer implements ComputerComponent {
    showConfiguration() {
        console.log(`This computer has the following basic components:`);
    }
}

abstract class ComputerDecorator implements ComputerComponent {
    protected computer: ComputerComponent;

    constructor(computer: ComputerComponent) {
        this.computer = computer;
    }

    showConfiguration() {
        this.computer.showConfiguration();
    }
}

class RAMUpgradeDecorator extends ComputerDecorator {
    constructor(computer: ComputerComponent) {
        super(computer);
    }

    showConfiguration() {
        super.showConfiguration();
        console.log('16GB RAM');
    }
}

class SSDUpgradeDecorator extends ComputerDecorator {
    constructor(computer: ComputerComponent) {
        super(computer);
    }

    showConfiguration() {
        super.showConfiguration();
        console.log('1TB SSD');
    }
}

let myComputer: ComputerComponent = new BasicComputer();
myComputer = new RAMUpgradeDecorator(myComputer);
myComputer = new SSDUpgradeDecorator(myComputer);

myComputer.showConfiguration();
