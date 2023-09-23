// class AirportSystem {
//     flights: any[] = [];
//     passengers: any[] = [];
//     crews: any[] = [];
//     planesMaintenance: any[] = [];
//     financialRecords: any[] = [];

//     // Métodos relacionados con vuelos
//     scheduleFlight(flight: any) {
//         this.flights.push(flight);
//     }

//     // Métodos relacionados con pasajeros
//     checkInPassenger(passenger: any) {
//         this.passengers.push(passenger);
//     }

//     // Métodos relacionados con tripulaciones
//     assignCrewToFlight(crew: any, flightID: string) {
//         this.crews.push({...crew, flightID});
//     }

//     // Métodos relacionados con el mantenimiento de aviones
//     logMaintenance(planeID: string, maintenance: any) {
//         this.planesMaintenance.push({planeID, ...maintenance});
//     }

//     // Métodos relacionados con facturación y contabilidad
//     recordFinancialTransaction(transaction: any) {
//         this.financialRecords.push(transaction);
//     }
// }


class FlightManager {
    flights: any[] = [];

    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }
}

class PassengerManager {
    passengers: any[] = [];

    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }
}

class CrewManager {
    crews: any[] = [];

    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }
}

class PlaneMaintenanceManager {
    planesMaintenance: any[] = [];

    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }
}

class FinancialManager {
    financialRecords: any[] = [];

    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}

class AirportSystem {
    flightManager: FlightManager = new FlightManager();
    passengerManager: PassengerManager = new PassengerManager();
    crewManager: CrewManager = new CrewManager();
    planeMaintenanceManager: PlaneMaintenanceManager = new PlaneMaintenanceManager();
    financialManager: FinancialManager = new FinancialManager();
}
