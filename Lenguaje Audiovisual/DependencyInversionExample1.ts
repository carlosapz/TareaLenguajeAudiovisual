class Luz{
    encender(){
        console.log("Luz encendida");
    }

    apagar(){
        console.log("Luz apagada");
    }
}

class Interruptor{
    private luz: Luz;
    private ONOFF: boolean;
    constructor(luz: Luz) {
        this.luz = luz;
    }

    operar(){
        //alguna logica para determinar si encender o apagar
        this.luz.encender(); // o this.luz.apagar();
    }
}