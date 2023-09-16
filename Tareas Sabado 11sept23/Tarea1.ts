/*Tarea 1 /Problema:
Supongamos que queremos expandir nuestro sistema para gestionar multas para aquellos usuarios que no devuelvan los libros a tiempo. Cada libro que se pase de la fecha de devolución generará una multa diaria.
Requisitos:
1.	Cada libro tiene un tiempo de préstamo estándar de 7 días.
2.	Una vez que un libro se presta, se debe registrar la fecha de préstamo.
3.	Cuando un libro es devuelto, el sistema debe calcular si se ha pasado del tiempo estándar y, si es así, determinar cuántos días se ha pasado.
4.	Por cada día de retraso, se debe generar una multa de $1.*/

// class Book {
//     constructor(
//         public title: string,
//         public author: string,
//         public isLoaded: boolean = false,
//         public isAvailable: boolean = true,
//         public borrowedDate: Date | null = null
//     ) {}
// }

class User {
    membership: any;
    constructor(public userID: string, public name: string) {}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}

interface ILogger {
    log(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

// class Library implements ILoadManager {
//     private books: Book[] = [];
//     private loadBooks: Map<string, User> = new Map();

//     constructor(private logger: ILogger) {}

//     loadBook(book: Book, user: User): void {
//         if (!book.isAvailable) {
//             this.logger.log('Book is already borrowed');
//             return;
//         }

//         book.isAvailable = false;
//         book.isLoaded = true;
//         book.borrowedDate = new Date();
//         this.loadBooks.set(book.title, user);

//         this.logger.log(`${user.name} has borrowed ${book.title}.`);
//     }

//     returnBook(book: Book): void {
//         if (book.isAvailable) {
//             this.logger.log('Book is not borrowed');
//             return;
//         }

//         book.isAvailable = true;
//         book.isLoaded = false;

//         if (book.borrowedDate) {
//             const currentDate = new Date();
//             const daysLate = Math.max(
//                 0,
//                 Math.floor((currentDate.getTime() - book.borrowedDate.getTime()) / (1000 * 60 * 60 * 24))
//             );

//             if (daysLate > 0) {
//                 const fineAmount = daysLate * 1; /* <--- Para la parte de la multa */
//                 this.logger.log(`${book.title} has been returned ${daysLate} days late. Fine: $${fineAmount}`);
//             }
//         }

//         this.loadBooks.delete(book.title);
//         this.logger.log(`${book.title} has been returned.`);
//     }

//     addBook(book: Book) {
//         this.logger.log('Adding a book to the library');
//         this.books.push(book);
//         this.logger.log('Book added successfully.');
//     }

//     findBookByTitle(title: string): Book | undefined {
//         this.logger.log('Searching for a book by title');
//         return this.books.find((book) => book.title === title);
//     }
// }




// Uso del código
const logger = new ConsoleLogger();
const library = new Library(logger);
// const book1 = new Book('libro1', 'autor1');

// library.addBook(book1);

// const user1 = new User('1', 'Usuario 1');
// library.loadBook(book1, user1);


