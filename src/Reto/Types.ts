export type Planeta = {
    nombre: string;
    masa: number;
    posicionActual: {
        x: number,
        y: number
    }
    velocidadDeOrbita: number;
    estrella: string;
    arrayPlanetas?: Planeta[];
    intervaloTiempo? : number;
};

export type Estrella = {
    nombre: string;
    masa: number;
    posicionActual: {
        x: number,
        y: number
    }
    velocidadDeOrbita: number;
    planetaPrimario: string;
    intervaloTiempo? : number;
    
};

export type SateliteNatural = {
    nombre: string;
    masa: number;
    posicionActual: {
        x: number,
        y: number
    }
    velocidadDeOrbita: number;
    intervaloTiempo? : number;
};

export type Coordenadas = {
    x: number;
    y: number;
}

