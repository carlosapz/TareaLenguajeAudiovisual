// Supongamos que este es un módulo que te permite cargar configuraciones de alguna fuente.
import { loadConfigurations } from './configLoader';

class ConfigurationService {
    private static instance: ConfigurationService;
    
    private configurations: Map<string, any>;

    private constructor() {
        this.configurations = new Map();
    }

    public static getInstance(): ConfigurationService {
        if (!ConfigurationService.instance) {
            ConfigurationService.instance = new ConfigurationService();
        }
        return ConfigurationService.instance;
    }

    public async initialize(): Promise<void> {
        // Suponemos que `loadConfigurations` devuelve una promesa con un objeto de configuraciones.
        const configData = await loadConfigurations();

        for (const [key, value] of Object.entries(configData)) {
            this.configurations.set(key, value);
        }
    }

    public getConfiguration(key: string): any {
        return this.configurations.get(key);
    }
}

// Uso del servicio de configuración:

(async function() {
    const configService = ConfigurationService.getInstance();
    await configService.initialize();

    const dbConnection = configService.getConfiguration("databaseConnection");
    console.log(dbConnection); // Esto imprimirá la configuración de conexión a la base de datos.
})();
