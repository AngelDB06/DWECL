import { Persona } from "./persona.js";

function edadPromedio(arr){
        let suma = arr.reduce((acc, persona) => acc+persona.edad, 0);
        return suma / arr.length;
    }

(function () {
    let p1 = new Persona("Angel", 17);
    let p2 = new Persona("Pepe", 18);
    let p3 = new Persona("Daniel", 19);
    let arrp=[p1,p2,p3];

    console.log(p1);
    console.log(p1.mayoriaEdad());
    console.log(edadPromedio(arrp));
})();