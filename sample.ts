class Book{
    constructor(public title:string,public author:string
        ,public isLoaded:boolean=false
        ,public isAvailable: string){

    }
}
class User{
    constructor(public userID:string,public name:string){
    }
}



//mostrar en un log de info toda la informacion del usuario que se esta prestando un libro
//mostrar un log de info toda la informacion del usuario qu e esta retornando un libro
//tip debe mostrar el objeto completo del usuario


interface ILoadManager{
    loadBook(book:Book,user:User):void;
    returnBook(book:Book,user:User):void;
}

interface Ilogger{
    log(message: string):void;
}
class consoleLogger implements Ilogger{
    log(message:string): void{
        console.log(message)
    }
}

//crear interfaz para logs de Error Warning e info
interface ILoggerError {
    error(message: string): void;
}
interface ILoggerWarning {
    warning(message: string): void;
}
interface ILoggerInfo {
    info(message: string): void;
}

class Library implements ILoadManager{
    private books:Book[]=[];
    private loadBooks:Map<string, User>=new Map();
    constructor(private logger:Ilogger,private loggerError:ILoggerError,private loggerWarning:ILoggerWarning,private loggerInfo:ILoggerInfo,){}
    
    loadBook(book: Book, user: User): void {
        if(book.isLoaded){
            this.logger.log('Book is loaded');
            return
        }
        this.loadBooks.set(book.isAvailable,user);
        book.isLoaded=true;
        this.logger.log("$(user.name) has borrowed $(book.title).");
        this.loggerInfo.info('datos del usuario $(user)');


    }
    returnBook(book: Book, user:User): void {
        if(!book.isLoaded){
            this.logger.log('Book is not loaded');
            return
        }
        this.loadBooks.delete(book.isAvailable);
        book.isLoaded=false;
        this.logger.log('$(user.title) has been returned.');
        this.loggerInfo.info('datos del usuario $(user)');
    }

    addBook(book: Book){
        this.logger.log('inicio de operacion');
        this.books.push(book);
        this.logger.log('fin de operacion');
    }

    findBookByTitle(title: string):Book | undefined{
        this.logger.log('inicio de operacion');
        if(this.books.find(book=>book.title===title)){
            return this.books.find(book=>book.title===title);
        }else{
            this.loggerWarning.warning('Advertencia no se econtro el libro');
        }

    }
    validateBookTitle(book: Book, expectedTitle: string): boolean | undefined {

        const foundBookTitle = this.books.find(book => book.title === expectedTitle);
        if(foundBookTitle){
            this.logger.log('El título "${book.title}"');
            return true;
        }else{
            this.loggerError.error('Erro nmo tiene el mismo nombre');

        }
    
    }
}


//uso del codigo
const logger = new consoleLogger();
const library = new Library(logger,loggerError,loggerWarning,loggerInfo);
const book1 =new Book('libro1','autor1');
library.addBook(book1);
library.findBookByTitle('libro1')













