class Paciente {
    constructor(nombre, edad, tipoSangre, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipoSangre = tipoSangre;
        this.genero = genero;
    }

    mostrarInfo() {
        console.log("Datos del paciente:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Tipo de sangre: ${this.tipoSangre}`);
        console.log(`Género: ${this.genero}`);
    }
}

var paciente = {
    nombre: "Elkin",
    edad: 34,
    tipoSangre: "O-",
    genero: "M"
}

var instanciaPaciente = new Paciente(
    paciente.nombre,
    paciente.edad,
    paciente.tipoSangre,
    paciente.genero
);

instanciaPaciente.mostrarInfo();