/* Reto: Simulador de Un Sistema Solar
Contexto: Te han encargado crear un simulador básico de un sistema solar. Este simulador debe permitir la creación de planetas, estrellas y satélites naturales (como lunas), cada uno con características específicas. Además, deberás implementar funcionalidades para mostrar la información de los cuerpos celestes, calcular su posición en un momento dado y simular el movimiento de los planetas alrededor de una estrella y de las lunas alrededor de sus planetas.

Requisitos:
Clases: Crea clases para Planeta, Estrella, y SatéliteNatural. Cada clase debe incluir propiedades como nombre, masa, posición actual (que puede ser representada por coordenadas x, y en el espacio), y velocidad de órbita. Los planetas y satélites naturales deben tener una propiedad que los vincule con su estrella o planeta respectivamente.

Arreglos y Objetos: Utiliza arreglos para almacenar múltiples instancias de cada tipo de cuerpo celeste. Por ejemplo, un arreglo de planetas en un sistema solar o un arreglo de satélites naturales orbitando un planeta.

Funciones: Desarrolla funciones que permitan:

Agregar nuevos cuerpos celestes al sistema.
Buscar cuerpos celestes por nombre y mostrar su información.
Calcular la posición futura de un cuerpo celeste basado en su velocidad de órbita y la posición actual.
Simular el movimiento orbital de los cuerpos celestes en un periodo de tiempo determinado.
Exportación e Importación: Organiza tu código en módulos. Por ejemplo, un módulo para las definiciones de clase, otro para las funciones de simulación, etc. Asegúrate de usar correctamente la exportación e importación para integrar estos módulos. */

import {Planeta, Estrella, SateliteNatural, Coordenadas} from './Types';
import {planeta, estrella, sateliteNatural} from './Class-Obj';


export const arrayPlanetas: Planeta[] = [];
export const arrayEstrellas: Estrella[] = [];
export const arraySatelites: SateliteNatural[] = [];


const addPlanetaArray = ( nombre: string, masa: number, posicionActual: { x: number, y: number}, velocidadDeOrbita: number, estrella: string, arrayPlanetas: Planeta[]): Planeta[] => {
    const nuevoPlaneta = new planeta({nombre, masa, posicionActual, velocidadDeOrbita, estrella});
    arrayPlanetas.push(nuevoPlaneta);
    return arrayPlanetas;
};

const addEstrellaArray = ( nombre: string, masa: number, posicionActual: { x: number, y: number}, velocidadDeOrbita: number, planetaPrimario: string, arrayEstrellas: Estrella[]): Estrella[] => {
        const nuevaEstrella = new estrella({nombre, masa, posicionActual, velocidadDeOrbita, planetaPrimario});
        arrayEstrellas.push(nuevaEstrella);
        return arrayEstrellas;
};

const addSateliteNaturalArray = ( nombre: string, masa: number, posicionActual: { x: number, y: number}, velocidadDeOrbita: number, arraySatelites: SateliteNatural[]): SateliteNatural[] => {
        const nuevoSatelite = new sateliteNatural({nombre, masa, posicionActual, velocidadDeOrbita});
        arraySatelites.push(nuevoSatelite);
        return arraySatelites;
};


const resultadoPlaneta = addPlanetaArray("Tierra", 5.972e24, { x: 0, y: 0 }, 29.78, "Sol", arrayPlanetas,);
const resultadoEstrella = addEstrellaArray("Sol", 1.989e30, { x: 0, y: 0 }, 0, "Tierra", arrayEstrellas);
const resultadoSatelite = addSateliteNaturalArray("Luna", 7.342e22, { x: 0, y: 0 }, 1.022, arraySatelites);


function calcularPosicionFutura(posicionActual: Coordenadas, velocidadOrbital: number, intervaloTiempo: number): Coordenadas {
    const distanciaPorTiempo: number = velocidadOrbital * intervaloTiempo;

    const nuevaX: number = posicionActual.x + distanciaPorTiempo;
    const nuevaY: number = posicionActual.y;

    return { x: nuevaX, y: nuevaY };
}

const posicionActual: Coordenadas = { x: 0, y: 0 };
const velocidadOrbital: number = 29.78; 
const intervaloTiempo: number = 3600; 

const nuevaPosicion: Coordenadas = calcularPosicionFutura(posicionActual, velocidadOrbital, intervaloTiempo);



console.log(resultadoPlaneta, nuevaPosicion, resultadoEstrella, resultadoSatelite);


export{}




