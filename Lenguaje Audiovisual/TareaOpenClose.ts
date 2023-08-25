//Ejemplo de Clase

// class Libro3 {
//     titulo: string;
//     autor: string;
//     contenido: string;
//     tipo: string;

//     constructor(titulo: string, autor: string, contenido: string, tipo: string) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.contenido = contenido;
//         this.tipo = tipo;
//     }

//     mostrarDescripcion(){
//         if(this.tipo === 'texto'){
//             return 'Libro de texto titulado "${this.titulo}" escrtito por ${this.autor}';
//         }
//     }
// }


// Definición de la clase base Libro3
class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;
    tipo: string;

    // Constructor de la clase
    constructor(titulo: string, autor: string, contenido: string, tipo: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }

    // Método para mostrar la descripción del libro
    mostrarDescripcion() {
        if (this.tipo === 'texto') {
            return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
        }
    }
}


