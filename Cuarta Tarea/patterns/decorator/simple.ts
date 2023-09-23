// Componente base
interface Coffee {
    cost(): number;
    description(): string;
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5; // Costo básico del café
    }

    description(): string {
        return 'Simple Coffee';
    }
}

// Base para los Decorators
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
}

// ConcreteDecoratorA
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 2;  // Costo del café más la leche
    }

    description(): string {
        return this.coffee.description() + ', with milk';
    }
}

// ConcreteDecoratorB
class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1;  // Costo del café más el azúcar
    }

    description(): string {
        return this.coffee.description() + ', with sugar';
    }
}

// Uso:
let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.description()} costs ${coffee.cost()}$`);

coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} costs ${coffee.cost()}$`);

coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} costs ${coffee.cost()}$`);
