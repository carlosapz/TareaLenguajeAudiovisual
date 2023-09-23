class EmailService {
    sendEmail(message: string, receiver: string) {
        console.log(`Sending email to ${receiver}: ${message}`);
    }
}

class MessageService {
    emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    sendMessage(message: string, receiver: string) {
        this.emailService.sendEmail(message, receiver);
    }
}

/////////////////////////////////////////////////////////////
// Definimos una interfaz para los servicios de mensajería
interface IMessagingService {
    sendMessage(message: string, receiver: string): void;
}

class EmailService implements IMessagingService {
    sendMessage(message: string, receiver: string) {
        console.log(`Sending email to ${receiver}: ${message}`);
    }
}

class SMSService implements IMessagingService {
    sendMessage(message: string, receiver: string) {
        console.log(`Sending SMS to ${receiver}: ${message}`);
    }
}

class MessageService {
    messagingService: IMessagingService;

    // Inyectamos la dependencia en el constructor
    constructor(messagingService: IMessagingService) {
        this.messagingService = messagingService;
    }

    sendMessage(message: string, receiver: string) {
        this.messagingService.sendMessage(message, receiver);
    }
}

const emailService = new EmailService();
const messageService1 = new MessageService(emailService);
messageService1.sendMessage("Hello via Email!", "john@example.com");

const smsService = new SMSService();
const messageService2 = new MessageService(smsService);
messageService2.sendMessage("Hello via SMS!", "123-456-7890");
