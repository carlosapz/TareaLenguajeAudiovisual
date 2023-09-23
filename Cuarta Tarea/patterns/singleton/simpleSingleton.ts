class Singleton {
    // Propiedad estática para almacenar la única instancia de la clase
    private static instance: Singleton;

    // El constructor es privado para evitar que se instancie externamente
    private constructor() {
        // Aquí puede ir la inicialización del objeto si es necesaria
    }

    // Método estático para obtener la única instancia de la clase
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Ejemplo de un método de la clase
    public someMethod(): void {
        console.log("Este método es parte del Singleton");
    }
}

// Uso del Singleton

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

// Comprobar si ambas instancias son la misma
console.log(instance1 === instance2); // Esto imprime "true", lo que significa que ambas variables apuntan a la misma instancia

instance1.someMethod(); // Esto imprime "Este método es parte del Singleton"
