
let ejemploSpreadOperatorCombinarObjetos=()=>{
    const objeto1={nombre:"Pedro", edad:28};
    const objeto2={calle:"Ronda", numero:4};

    const objetoCombinado={...objeto1,...objeto2, pais:"España"};
    console.log("Objeto 1:", objeto1);
    console.log("Objeto 2:", objeto2);
    console.log("Objeto combinado:", objetoCombinado)
}


/**
 * Ejemplo de uso del spread operator para copiar objetos
 */
let ejemploSpreadOperatorObjetos=()=>{
    const persona1={nombre:"Ana", edad:25};
    const persona2={...persona1};
    persona2.nombre="Luis";
    console.log("Persona 1:", persona1);
    console.log("Persona 2:", persona2);
    
}

let copiaArray=(arOrigen, arDestino)=>{
    arDestino=arOrigen;
}

let expandeArray=() => {
    const numeros = [1, 2, 3, 4, 5];
    console.log("Array original: ", numeros);
    console.log("Array expandido: ",...numeros);
}

/**
 * mainp.js Ejemplo de uso de rest operator
 */
(function () {
    const valores = ["a", "b", "c", "d", "e"];
    console.log("This is mainp.js");
    expandeArray();
    let arDestino=[];
    let arDestino2=[];
    copiaArray(valores, arDestino2);

    arDestino=[...valores, "g"];
    console.log("Array copiado: ", arDestino);
    arDestino.push("f");
    console.log("Array copiado modificado: ", arDestino);
    console.log("Array original tras modificar el copiado: ", arDestino2);

    //Ejemplos con objetos de spread operator
    ejemploSpreadOperatorObjetos();

    //Ejemplos de combinar objetos con spread operator
    ejemploSpreadOperatorCombinarObjetos();
})();