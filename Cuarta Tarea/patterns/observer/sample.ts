// Observer
interface Observer {
    update(temperature: number): void;
}

// ConcreteObserver
class AlertSystem implements Observer {
    update(temperature: number) {
        if (temperature > 30) {
            console.log('AlertSystem: High temperature detected!');
        }
    }
}

// ConcreteObserver
class UserNotification implements Observer {
    update(temperature: number) {
        if (temperature > 30) {
            console.log('UserNotification: It’s getting hot! Stay hydrated.');
        }
    }
}

// Subject
class TemperatureSensor {
    private observers: Observer[] = [];
    private temperature: number = 0;

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    setTemperature(temp: number) {
        console.log(`TemperatureSensor: New temperature recorded: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }

    private notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

// Uso:
const sensor = new TemperatureSensor();
const alertSys = new AlertSystem();
const userNotif = new UserNotification();

sensor.addObserver(alertSys);
sensor.addObserver(userNotif);

sensor.setTemperature(32);  // Triggers the alerts
