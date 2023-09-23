// class Journalist {
//     name: string;
//     articles: string[] = [];

//     constructor(name: string) {
//         this.name = name;
//     }

//     publishArticle(article: string) {
//         this.articles.push(article);
//         console.log(`El periodista ${this.name} ha publicado: ${article}`);
//     }
// }

// class Reader {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     checkForNewArticles(journalist: Journalist) {
//         const latestArticle = journalist.articles[journalist.articles.length - 1];
//         console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
//     }
// }

// const journalistA = new Journalist('Juan');
// const readerB = new Reader('Ana');

// journalistA.publishArticle("Los beneficios de la programación");
// readerB.checkForNewArticles(journalistA);


interface Observer {
    update(article: string): void;
}

class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}


class Journalist {
    name: string;
    articles: string[] = [];
    private observers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
        this.notifyObservers(article);
    }

    private notifyObservers(article: string) {
        for (let observer of this.observers) {
            observer.update(article);
        }
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.addObserver(readerB);
journalistA.publishArticle("Los beneficios de la programación");
