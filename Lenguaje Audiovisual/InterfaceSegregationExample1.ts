interface DispositivoMultimedia extends ParaAudio{
    reproducirVideo(): void;
    leerEbook(): void;
}

interface ParaAudio{
    reproducirMusica(): void;
}

class Smartphone implements DispositivoMultimedia{

    reproducirMusica(){
        console.log('Reproduciendo musica en el smartphone');
    }

    reproducirVideo(){
        console.log("Reproduciendo video en el smartphone");
    }

    leerEbook(){
        console.log("Leyendo Ebook en el smartphone");
    }
}

class ReproductorMP3 implements ParaAudio{

    reproducirMusica(){
        console.log('Reproduciendo musica en el reproductor MP3');
    } 
}