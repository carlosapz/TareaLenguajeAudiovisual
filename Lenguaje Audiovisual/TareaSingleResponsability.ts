// class Libro1 {
//     titulo: string;
//     autor: string;
//     contenido: string;

//     constructor(titulo: string, autor: string, contenido: string) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.contenido = contenido;
//     }

//     mostrarContenido() {
//         return this.contenido;
//     }

//     guardarEnBaseDeDatos() {
//         //Codigo para guardar el libro en la base de datos
//         console.log('Guardando el libro ${this.titulo} en la base de datos....');
//     }
// }

// const libro1 = new Libro1('El principito', 'Antoine de Saint-Exupéry','Érase una vez...');
// libro1.guardarEnBaseDeDatos();



// Definición de la clase Libro1 que representa la información de los libros
class Libro1 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    // Método para mostrar el contenido del libro
    mostrarContenido() {
        return this.contenido;
    }
}

// Definición de la clase LibroDBHandler que maneja la operación de guardar libros en la base de datos
class LibroDBHandler {
    // Método para guardar un libro en la base de datos
    guardarEnBaseDeDatos(libro: Libro1) {
        // Simulamos el código para guardar el libro en la base de datos
        console.log(`Guardando el libro ${libro.titulo} en la base de datos....`);
    }
}

// Creación de una instancia de Libro1
const libro1 = new Libro1('El principito', 'Antoine de Saint-Exupéry', 'Érase una vez...');

// Creación de una instancia de LibroDBHandler (Manejador de la Base de Datos)
const dbHandler = new LibroDBHandler();

// Llamada al método guardarEnBaseDeDatos del manejador para guardar el libro en la base de datos
dbHandler.guardarEnBaseDeDatos(libro1);
