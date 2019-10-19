const save = (paciente) => {
    const errores = {
        nombres: [],
        apellidos: [],
        edad: []
    }

    const nombres = paciente.nombres.trim();

    if (nombres.split(" ").length != 2) {
        errores.nombres.push("Debe contener dos nombres");
    }

    const apellidos = paciente.apellidos.trim();

    if (apellidos.split(" ").length != 2) {
        errores.apellidos.push("Debe contener dos apellidos");
    }

    if (nombres.match(/\d/g) !== null) {
        errores.nombres.push("Debe contener solo letras");
    }

    if (apellidos.match(/\d/g) !== null) {
        errores.apellidos.push("Debe contener solo letras");
    }

    let edad = paciente.edad;


    if(Number.isInteger(edad)) {
        if (edad < 0) {
            errores.edad.push("Debe ser positivo");
        }
    } else {
        if(edad.match(/\D/g) != null) {
            errores.edad.push("Debe ser entero");

            if(parseInt(edad) < 0) {
                errores.edad.push("Debe ser positivo");
            }
        } else {
            if(parseInt(edad) < 0) {
                errores.edad.push("Debe ser positivo");
            }
        }
    }

    if (errores.nombres.length > 0 || errores.apellidos.length > 0 || errores.edad.length > 0) {
        return errores;
    } else {
        return undefined;
    }

    // const validaciones = {};

    // if (Object.keys(paciente).length === 0) {
    //     return { paciente : ["Se requieren datos"] };
    // }

    // // console.log(paciente);
    // if (!paciente.nombres) {
    //     validaciones.nombres = [
    //         "El nombre es requerido",
    //     ];
    // } else {
    //     const largo = paciente.nombres.length;
    //     if (largo === 0) {
    //         validaciones.nombres = [
    //             "El campo nombres puede estar vacio"
    //         ];
    //     } else {
    //         let split = paciente.nombres.split(' ');
    //         let pattern = new RegExp('^[A-Z]+$', 'i');
    //         console.log(pattern.test(paciente.nombres));
    //         // console.log(split);
    //         if(split.length === 1 || split.length > 2) {
    //             validaciones.nombres = [
    //                 "El campo nombres debe tener dos palabras"
    //             ];
    //         }
    //     }
    // }

    // const tieneErrores = Object.keys(validaciones).length > 0;

    // return tieneErrores ? validaciones : undefined;

}

module.exports = {
    save
}