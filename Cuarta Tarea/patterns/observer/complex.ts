// Observer interface
interface Observer {
    update(productName: string, action: string, value?: number): void;
}

// Subject interface
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notify(productName: string, action: string, value?: number): void;
}

class ECommercePlatform implements Subject {
    private observers: Observer[] = [];
    private products: { [key: string]: { price: number, stock: number } } = {};

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(productName: string, action: string, value?: number) {
        for (let observer of this.observers) {
            observer.update(productName, action, value);
        }
    }

    addProduct(productName: string, price: number) {
        this.products[productName] = { price, stock: 0 };
    }

    changePrice(productName: string, newPrice: number) {
        if (this.products[productName].price !== newPrice) {
            this.products[productName].price = newPrice;
            this.notify(productName, 'price', newPrice);
        }
    }

    restock(productName: string, quantity: number) {
        this.products[productName].stock += quantity;
        this.notify(productName, 'stock', this.products[productName].stock);
    }
}

class User implements Observer {
    constructor(private name: string) {}

    update(productName: string, action: string, value?: number) {
        switch (action) {
            case 'price':
                console.log(`${this.name}: The price of ${productName} has changed to $${value}.`);
                break;
            case 'stock':
                console.log(`${this.name}: The ${productName} is back in stock! Available quantity: ${value}.`);
                break;
        }
    }
}

// Usage:
const shop = new ECommercePlatform();

const alice = new User('Alice');
const bob = new User('Bob');

shop.addProduct('Gaming Laptop', 1200);
shop.addObserver(alice);
shop.addObserver(bob);

shop.changePrice('Gaming Laptop', 1000); // Both Alice and Bob are notified of the price change
shop.restock('Gaming Laptop', 10); // Both Alice and Bob are notified that the product is back in stock
