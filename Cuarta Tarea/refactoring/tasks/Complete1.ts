// class Task {
//     title: string;
//     isCompleted: boolean;

//     constructor(title: string) {
//         this.title = title;
//         this.isCompleted = false;
//     }

//     completeTask() {
//         this.isCompleted = true;
//         console.log(`Task "${this.title}" has been completed.`);
//     }

//     printTaskDetails() {
//         console.log(`Task: ${this.title}, Status: ${this.isCompleted ? 'Completed' : 'Active'}`);
//     }
// }

// const myTask = new Task("Learn TypeScript");
// myTask.completeTask();
// myTask.printTaskDetails();


class Task {
    title: string;
    isCompleted: boolean;

    constructor(title: string) {
        this.title = title;
        this.isCompleted = false;
    }

    complete() {
        this.isCompleted = true;
    }

    getStatus() {
        return this.isCompleted ? 'Completed' : 'Active';
    }

    getDetails() {
        return `Task: ${this.title}, Status: ${this.getStatus()}`;
    }
}

const myTask = new Task("Learn TypeScript");
myTask.complete();
console.log(myTask.getDetails());
