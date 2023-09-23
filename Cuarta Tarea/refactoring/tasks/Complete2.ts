// class Product {
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// class Cart {
//     products: Product[] = [];

//     addProduct(product: Product) {
//         this.products.push(product);
//     }

//     calculateTotal(): number {
//         let total = this.products.reduce((acc, product) => acc + product.price, 0);

//         // Descuento: 10% si hay más de 5 productos
//         if (this.products.length > 5) {
//             total *= 0.9;
//         }

//         // Envío: $10 si la compra es menor a $50
//         if (total < 50) {
//             total += 10;
//         }

//         return total;
//     }
// }



class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = this.calculateSubtotal();

        total = this.applyDiscount(total);
        total = this.applyShipping(total);

        return total;
    }

    private calculateSubtotal(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    private applyDiscount(total: number): number {
        if (this.products.length > 5) {
            total *= 0.9;
        }

        return total;
    }

    private applyShipping(total: number): number {
        if (total < 50) {
            total += 10;
        }

        return total;
    }
}

const product1 = new Product(1, "Laptop", 800);
const product2 = new Product(2, "Headphones", 100);
const product3 = new Product(3, "Mouse", 20);
const product4 = new Product(4, "Keyboard", 50);
const product5 = new Product(5, "Monitor", 300);

const cart = new Cart();

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

const total = cart.calculateTotal();

console.log("Total: $" + total);
