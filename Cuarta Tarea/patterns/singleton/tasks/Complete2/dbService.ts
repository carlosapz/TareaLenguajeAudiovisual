// dbService.ts

export class DatabaseService {
    private static instance: DatabaseService;
    private connectionString: string;

    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public static getInstance(connectionString: string): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService(connectionString);
        }
        return DatabaseService.instance;
    }

    connect(): void {
        console.log(`Connecting to database with ${this.connectionString}`);
    }
}
