// /*Tarea 2
// Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
// Requisitos:
// 1.	Membresías de usuario:
// •	Tres tipos de membresías: Básico, Premium y Platino.
// •	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
// •	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
// •	Platino: Puede pedir prestado un número ilimitado de libros.
// 2.	Categorización de libros:
// •	Los libros se categorizan en Ficción, No Ficción, y Referencia.
// •	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
// 3.	Historial de préstamos:
// •	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/

class Membership {
    constructor(public type: string, public maxBooksAllowed: number) {}
}

class BasicMembership extends Membership {
    constructor() {
        super('Basic', 2);
    }
}

class PremiumMembership extends Membership {
    constructor() {
        super('Premium', 5);
    }
}

class PlatinumMembership extends Membership {
    constructor() {
        super('Platinum', Infinity);
    }
}

/*CATEGORIAS DE LOS LIBROS*/

enum BookCategory {
    Fiction = 'Fiction',
    NonFiction = 'No Fiction',
    Reference = 'Reference',
}


class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: boolean = true,
        public borrowedDate: Date | null = null,
        public category: BookCategory
    ) {}
}




class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();
    private userHistory: Map<string, Book[]> = new Map();

    constructor(private logger: ILogger) {}

    loadBook(book: Book, user: User): void {
        if (!book.isAvailable) {
            this.logger.log('Book is already borrowed');
            return;
        }

        const userBooks = this.userHistory.get(user.userID) || [];
        if (userBooks.length >= user.membership.maxBooksAllowed) {
            this.logger.log('User has reached the maximum limit of borrowed books');
            return;
        }

        if (book.category === BookCategory.Reference) {
            this.logger.log('Reference books cannot be borrowed');
            return;
        }

        book.isAvailable = false;
        book.isLoaded = true;
        book.borrowedDate = new Date();
        this.loadBooks.set(book.title, user);

        /*Para el prestamo de un libro a un usuaruo*/
        
        userBooks.push(book);
        this.userHistory.set(user.userID, userBooks);

        this.logger.log(`${user.name} has borrowed ${book.title}.`);
    }

    returnBook(book: Book): void {
        if (book.isAvailable) {
            this.logger.log('Book is not borrowed');
            return;
        }

        book.isAvailable = true;
        book.isLoaded = false;

        if (book.borrowedDate) {
            const currentDate = new Date();
            const daysLate = Math.max(
                0,
                Math.floor((currentDate.getTime() - book.borrowedDate.getTime()) / (1000 * 60 * 60 * 24))
            );

            if (daysLate > 0) {
                const fineAmount = daysLate * 1; /* <--- Para la parte de la multa */
                this.logger.log(`${book.title} has been returned ${daysLate} days late. Fine: $${fineAmount}`);
            }
        }

        this.loadBooks.delete(book.title);
        this.logger.log(`${book.title} has been returned.`);
    }

    addBook(book: Book) {
        this.logger.log('Adding a book to the library');
        this.books.push(book);
        this.logger.log('Book added successfully.');
    }

    findBookByTitle(title: string): Book | undefined {
        this.logger.log('Searching for a book by title');
        return this.books.find((book) => book.title === title);
    }

    getUserHistory(userID: string): Book[] | undefined {
        return this.userHistory.get(userID);
    }
}
