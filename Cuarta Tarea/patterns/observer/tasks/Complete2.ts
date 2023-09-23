// class Auction {
//     item: string;
//     currentBid: number = 0;
//     highestBidder: string | null = null;

//     constructor(item: string) {
//         this.item = item;
//     }

//     makeBid(bidderName: string, amount: number) {
//         if (amount > this.currentBid) {
//             this.currentBid = amount;
//             this.highestBidder = bidderName;
//             console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
//         } else {
//             console.log(`${bidderName}, tu oferta es demasiado baja.`);
//         }
//     }
// }

// const auctionItem = new Auction("Cuadro famoso");
// auctionItem.makeBid("Carlos", 500);
// auctionItem.makeBid("Ana", 450);



interface BidObserver {
    update(bidderName: string, amount: number): void;
}

class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;
    private observers: BidObserver[] = [];

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
            this.notifyObservers(bidderName, amount);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }

    addObserver(observer: BidObserver) {
        this.observers.push(observer);
    }

    removeObserver(observer: BidObserver) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private notifyObservers(bidderName: string, amount: number) {
        for (let observer of this.observers) {
            observer.update(bidderName, amount);
        }
    }
}

class BidLogger implements BidObserver {
    update(bidderName: string, amount: number) {
        console.log(`Registro de ofertas: ${bidderName} ha realizado una oferta de ${amount}`);
    }
}

const auctionItem = new Auction("Cuadro famoso");
const bidLogger = new BidLogger();

auctionItem.addObserver(bidLogger);

auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);
