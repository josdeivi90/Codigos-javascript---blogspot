/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular, 
número de cuenta y cantidad (puede tener decimales). 

Tendrá dos métodos especiales:
ingresar: se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
retirar: si se intenta retirar más de lo que hay de saldo, imprimir que no es posible retirar.

*/

class cuenta {
    constructor(titular, numeroDeCuenta, cantidad) {
        this.titular = titular,
            this.numeroDeCuenta = numeroDeCuenta,
            this.cantidad = cantidad
    }

    mostrarInfo() {
        console.log("Datos del cliente:");
        console.log(`Nombre: ${this.titular}`);
        console.log(`Edad: ${this.numeroDeCuenta}`);
        console.log(`cantidad en la cuenta: ${this.cantidad}`);
        console.log('--------------------------------------');

    }

    ingresar(valor) {
        console.log('Ingrese la cantidad deseada a la cuenta');

        if (valor <= 0) {
            console.log('Imposible realizar la transferencia, por favor revise el valor ingresado');
        } else {
            this.cantidad = +valor;
            console.log(`la cantidad que ingresaste fue ${this.cantidad}`);
        }


    }

    retirar(monto) {
        console.log('cuanto desea retirar');
        if (monto > this.cantidad) {
            console.log('Imposible realizar la transferencia, por favor revise el valor ingresado');
        } else {
            this.cantidad = this.cantidad - monto;
            console.log(`la cantidad restante es ${this.cantidad}`);
        }

    }
}


var cliente = {
    nombre: "David angarita",
    numeroDeCuenta: 09076802458,
    disponible: 5000000
}

var instanciacliente = new cuenta(
    cliente.nombre,
    cliente.numeroDeCuenta,
    cliente.disponible
);

instanciacliente.mostrarInfo();
instanciacliente.retirar(4000000);
instanciacliente.mostrarInfo();