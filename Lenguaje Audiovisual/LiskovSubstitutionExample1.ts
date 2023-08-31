interface Animals{
    comer();

}

interface Aves extends Animals{
    volar();
}

interface Acuaticos extends Animals{
    nadar();
}

class Pajaro implements Aves{
    volar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }    
    
}

class Pinguino implements Acuaticos{
    nadar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    
}

