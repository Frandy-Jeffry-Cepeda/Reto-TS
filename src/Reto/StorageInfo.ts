import {Planeta, Estrella, SateliteNatural} from '../Reto/Types';
import { arrayPlanetas} from './Funcion-main';


const Buscar = (nombre: string, arrayPlanetas: Planeta[], arrayEstrellas: Estrella[], arraySatelites: SateliteNatural[]): Planeta | Estrella | SateliteNatural | undefined => {
    for (const planeta of arrayPlanetas) {
        if (planeta.nombre === nombre) {
            return planeta;
        }
    }

    for (const estrella of arrayEstrellas) {
        if (estrella.nombre === nombre) {
            return estrella;
        }
    }
    
    for (const satelite of arraySatelites) {
        if (satelite.nombre === nombre) {
            return satelite;
        }
    }
   
    return undefined;
};

const buscarYMostrarInformacion = (nombre: string, arrayPlanetas: Planeta[], arrayEstrellas: Estrella[], arraySatelites: SateliteNatural[]) => {
    const cuerpoCeleste = Buscar(nombre, arrayPlanetas, arrayEstrellas, arraySatelites);
    if (cuerpoCeleste) {
        console.log("Información del cuerpo celeste encontrado:", cuerpoCeleste);
    } else {
        console.log("Cuerpo celeste no encontrado");
    }
};


buscarYMostrarInformacion("Tierra", arrayPlanetas, [], []);