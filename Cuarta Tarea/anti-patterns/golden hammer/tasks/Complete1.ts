// class TodoManager {
//     private todos: string[] = [];

//     add(todo: string) {
//         this.todos.push(todo);
//         this.save();
//         this.render();
//     }

//     remove(index: number) {
//         this.todos.splice(index, 1);
//         this.save();
//         this.render();
//     }

//     private save() {
//         console.log("Saving todos to local storage...");
//         // Código para guardar todos en el almacenamiento local
//     }

//     private render() {
//         console.log("Rendering todos in the UI...");
//         // Código para renderizar todos en la UI
//     }
// }


class TodoManager {
    private todos: string[] = [];
    private storageManager: LocalTodoStorageManager;
    private uiRenderer: UIRenderer;

    constructor(storageManager: LocalTodoStorageManager, uiRenderer: UIRenderer) {
        this.storageManager = storageManager;
        this.uiRenderer = uiRenderer;
        this.todos = this.storageManager.load();
    }

    add(todo: string) {
        this.todos.push(todo);
        this.saveAndRender();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.saveAndRender();
    }

    private saveAndRender() {
        this.storageManager.save(this.todos);
        this.uiRenderer.render(this.todos);
    }
}

class LocalTodoStorageManager {
    save(todos: string[]) {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    load(): string[] {
        console.log("Loading todos from local storage...");
        // Código para cargar todos desde el almacenamiento local
        return []; 
    }
}

class UIRenderer {
    render(todos: string[]) {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}


const storageManager = new LocalTodoStorageManager();
const uiRenderer = new UIRenderer();
const todoManager = new TodoManager(storageManager, uiRenderer);

todoManager.add("Task 1");
todoManager.add("Task 2");
todoManager.remove(0);
