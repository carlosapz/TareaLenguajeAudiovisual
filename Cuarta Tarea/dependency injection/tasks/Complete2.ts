// class BikeDelivery {
//     deliverPackage(packageId: string, address: string) {
//         console.log(`Delivering package ${packageId} to ${address} using a bike.`);
//     }
// }

// class PackageService {
//     deliveryMethod: BikeDelivery;

//     constructor() {
//         this.deliveryMethod = new BikeDelivery();
//     }

//     sendPackage(packageId: string, address: string) {
//         this.deliveryMethod.deliverPackage(packageId, address);
//     }
// }


class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

interface IDeliveryService {
    deliverPackage(packageId: string, address: string): void;
}

class PackageService {
    deliveryMethod: IDeliveryService;

    constructor(deliveryMethod: IDeliveryService) {
        this.deliveryMethod = deliveryMethod;
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}

const bikeDelivery = new BikeDelivery();

const packageService = new PackageService(bikeDelivery);

packageService.sendPackage("12345", "123 Tumusla St.");
