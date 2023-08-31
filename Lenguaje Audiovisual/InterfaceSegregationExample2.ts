
interface Animal_acuatic {      
    nadar(): void;    
}
interface Animal_ave{
    volar(): void;
    hacerSonido(): void;
    caminar(): void;
}

class Aguila implements Animal_ave {
    volar(): void {
        throw new Error("Method not implemented.");
    }
    hacerSonido(): void {
        throw new Error("Method not implemented.");
    }
    caminar(): void {
        throw new Error("Method not implemented.");
    }

}

class Tiburon implements Animal_acuatic {
    nadar(): void {
        throw new Error("Method not implemented.");
    }

}