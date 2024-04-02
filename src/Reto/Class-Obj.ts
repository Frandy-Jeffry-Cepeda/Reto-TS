import {Planeta, Estrella, SateliteNatural} from '../Reto/Types';

export class planeta {
    nombre: string;
    masa: number;
    posicionActual: { x:number, y: number }
    velocidadDeOrbita: number;
    estrella: string;

    constructor(obj: Planeta){
        this.nombre = obj.nombre;
        this.masa = obj.masa;
        this.posicionActual = obj.posicionActual;
        this.velocidadDeOrbita = obj.velocidadDeOrbita;
        this.estrella = obj.estrella; 
    }
}

export class estrella {
    nombre: string;
    masa: number;
    posicionActual: { x:number, y: number }
    velocidadDeOrbita: number;
    planetaPrimario: string;

    constructor(obj: Estrella){
        this.nombre = obj.nombre;
        this.masa = obj.masa;
        this.posicionActual = obj.posicionActual;
        this.velocidadDeOrbita = obj.velocidadDeOrbita;
        this.planetaPrimario = obj.planetaPrimario; 
    }
}

export class sateliteNatural {
    nombre: string;
    masa: number;
    posicionActual: { x:number, y: number }
    velocidadDeOrbita: number;

    constructor(obj: SateliteNatural){
        this.nombre = obj.nombre;
        this.masa = obj.masa;
        this.posicionActual = obj.posicionActual;
        this.velocidadDeOrbita = obj.velocidadDeOrbita;
    }
}