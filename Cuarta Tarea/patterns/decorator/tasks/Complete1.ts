// class Room {
//     paint: string;
//     design: string;

//     constructor(paint: string) {
//         this.paint = paint;
//         this.design = '';
//     }

//     applyDesign(design: string) {
//         this.design += design;
//     }

//     showRoom() {
//         console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
//     }
// }

// const myRoom = new Room('blue');
// myRoom.applyDesign('stripe');
// myRoom.showRoom();



interface Room {
    showRoom(): void;
}


class BasicRoom implements Room {
    private paint: string;
    private design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}


abstract class RoomDecorator implements Room {
    protected room: Room;

    constructor(room: Room) {
        this.room = room;
    }

    showRoom() {
        this.room.showRoom();
    }
}


class StripeDecorator extends RoomDecorator {
    private stripeColor: string;

    constructor(room: Room, stripeColor: string) {
        super(room);
        this.stripeColor = stripeColor;
    }

    showRoom() {
        super.showRoom();
        console.log(`It also has ${this.stripeColor} stripes.`);
    }
}


let myRoom: Room = new BasicRoom('blue');
myRoom = new StripeDecorator(myRoom, 'white');
myRoom.showRoom();
