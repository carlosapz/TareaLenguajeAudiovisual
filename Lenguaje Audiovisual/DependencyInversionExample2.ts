class Configuracion{
    valor: string;

    constructor(valor: string){
        this.valor = valor;
    }
}

class BaseDeDatos{
    guardar(configuracion: Configuracion){
        console.log('Guardando configuracion con valor: ${configuracion.valor} en la base de datos')
    }

    obtener(): Configuracion{
        //Obtener de la BD.....
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones{
    db: BaseDeDatos;

    constructor(){
        this.db = new BaseDeDatos();
    }

    guardarConfiguracion(valor: string){
        const configuracion = new Configuracion(valor);
        this.db.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion{
        return this.db.obtener();
    }
}