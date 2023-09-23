// Suponiendo que este es un paquete MongoDB genérico para nuestras apps
class MongoDB {
    insert(document: any) {
        console.log("Inserting document into MongoDB:", document);
    }

    find(query: any) {
        console.log("Finding document with query:", query);
        // Supongamos que retorna algún documento
        return [{ ...query }];
    }

    // ... otros métodos para MongoDB
}

// Aplicación de Redes Sociales
class SocialMediaApp {
    db: MongoDB;

    constructor(db: MongoDB) {
        this.db = db;
    }

    postContent(content: any) {
        this.db.insert(content);
    }

    searchContent(query: any) {
        return this.db.find(query);
    }
}

// Sistema Financiero
class FinancialSystem {
    db: MongoDB;

    constructor(db: MongoDB) {
        this.db = db;
    }

    recordTransaction(transaction: any) {
        if (transaction.type === "transfer") {
            // Aquí se puede ver cómo las transacciones ACID podrían complicarse
            const sourceAccount = this.db.find({ id: transaction.sourceAccountId })[0];
            const targetAccount = this.db.find({ id: transaction.targetAccountId })[0];
            
            if (!sourceAccount || !targetAccount) {
                console.error("Accounts not found!");
                return;
            }

            //... otros problemas relacionados con la integridad y coherencia de datos
        }

        this.db.insert(transaction);
    }
}

// Uso:

const db = new MongoDB();

const socialApp = new SocialMediaApp(db);
socialApp.postContent({ user: "John", content: "Hello world!" });

const financeSystem = new FinancialSystem(db);
financeSystem.recordTransaction({ type: "transfer", sourceAccountId: "A1", targetAccountId: "A2", amount: 100 });

// ... otros ejemplos para el sistema de inventario, etc.
