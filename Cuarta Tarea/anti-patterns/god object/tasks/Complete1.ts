// class Cinema {
//     movies: any[] = [];
//     snacks: any[] = [];
//     tickets: any[] = [];
//     employees: any[] = [];

//     // Métodos relacionados con películas
//     addMovie(movie: any) {
//         this.movies.push(movie);
//     }

//     // Métodos relacionados con snacks
//     buySnack(snack: any) {
//         this.snacks.push(snack);
//     }

//     // Métodos relacionados con entradas
//     buyTicket(ticket: any) {
//         this.tickets.push(ticket);
//     }

//     // Métodos relacionados con empleados
//     hireEmployee(employee: any) {
//         this.employees.push(employee);
//     }
// }



class Movie {
    title: string;
    director: string;
    releaseDate: Date;
    duration: number;

    constructor(title: string, director: string, releaseDate: Date, duration: number) {
        this.title = title;
        this.director = director;
        this.releaseDate = releaseDate;
        this.duration = duration;
    }

}

class Snack {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Ticket {
    movie: Movie;
    date: Date;
    seatNumber: string;
    price: number;

    constructor(movie: Movie, date: Date, seatNumber: string, price: number) {
        this.movie = movie;
        this.date = date;
        this.seatNumber = seatNumber;
        this.price = price;
    }
}

class Employee {
    name: string;
    position: string;
    salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}


class Cinema {
    movies: Movie[] = [];
    snacks: Snack[] = [];
    tickets: Ticket[] = [];
    employees: Employee[] = [];

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    buySnack(snack: Snack) {
        this.snacks.push(snack);
    }

    buyTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }

    hireEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}
