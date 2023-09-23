// Componente base
interface Notifier {
    send(message: string): void;
}

// ConcreteComponent
class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

// Base para los Decorators
abstract class NotifierDecorator implements Notifier {
    protected notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    abstract send(message: string): void;
}

// ConcreteDecoratorA
class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        this.notifier.send(message);
        console.log(`Sending SMS with message: ${message}`);
    }
}

// ConcreteDecoratorB
class SlackNotifier extends NotifierDecorator {
    send(message: string): void {
        this.notifier.send(message);
        console.log(`Sending Slack notification with message: ${message}`);
    }
}

// Uso:
let notifier: Notifier = new EmailNotifier();

notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);

notifier.send('Hello World!');
