interface TransactionMethod {
    processTransaction(amount: number): void;
}

class WebApp implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via WebApp.`);
        // Lógica específica para procesar una transacción a través de la aplicación web
    }
}

class MobileApp implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via MobileApp.`);
        // Lógica específica para procesar una transacción a través de la aplicación móvil
    }
}

class ATMMachine implements TransactionMethod {
    processTransaction(amount: number) {
        console.log(`Processing transaction of $${amount} via ATM.`);
        // Lógica específica para procesar una transacción a través de un cajero automático
    }
}

class BankAccount {
    balance: number;
    transactionMethod: TransactionMethod;

    constructor(initialBalance: number, transactionMethod: TransactionMethod) {
        this.balance = initialBalance;
        this.transactionMethod = transactionMethod;
    }

    makeTransaction(amount: number) {
        this.transactionMethod.processTransaction(amount);
        this.balance -= amount;  // simplificando para un retiro
    }
}

const webApp = new WebApp();
const mobileApp = new MobileApp();
const atmMachine = new ATMMachine();

const johnsAccount = new BankAccount(1000, webApp);
johnsAccount.makeTransaction(100);  // Usa WebApp

johnsAccount.transactionMethod = mobileApp;
johnsAccount.makeTransaction(150);  // Usa MobileApp

johnsAccount.transactionMethod = atmMachine;
johnsAccount.makeTransaction(200);  // Usa ATM
