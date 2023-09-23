class Order {
    items: string[];
    orderDate: Date;
    isShipped: boolean;

    constructor() {
        this.items = [];
        this.orderDate = new Date();
        this.isShipped = false;
    }

    addItem(item: string) {
        this.items.push(item);
    }

    shipOrder() {
        if (this.items.length === 0) {
            console.log("No items to ship.");
        } else {
            this.isShipped = true;
            console.log("Order shipped.");
        }
    }

    orderSummary() {
        console.log("Order Date:", this.orderDate);
        console.log("Items:", this.items);
        console.log("Shipped:", this.isShipped);
    }
}


///////////////////////////////////////
class Order {
    items: string[];
    orderDate: Date;
    isShipped: boolean;

    constructor() {
        this.items = [];
        this.orderDate = new Date();
        this.isShipped = false;
    }

    addItem(item: string) {
        this.items.push(item);
    }

    canShip(): boolean {
        return this.items.length > 0;
    }

    shipOrder() {
        if (this.canShip()) {
            this.isShipped = true;
            console.log("Order shipped.");
        } else {
            console.log("No items to ship.");
        }
    }

    orderSummary(): string {
        return `
        Order Date: ${this.orderDate}
        Items: ${this.items.join(", ")}
        Shipped: ${this.isShipped}
        `;
    }
}

// Uso
const order = new Order();
order.addItem("Book");
order.addItem("Pen");
order.shipOrder();
console.log(order.orderSummary());
