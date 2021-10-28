console.log('jose david');

function fare(c) {
    let f = 32 + (9 * c / 5)
    console.log(f)
}

fare(20)

function cliente(llegada) {
    if (llegada <= 20) {
        console.log("el descuento es de 30%");
    } else if (llegada <= 50) {
        console.log("el descuento es de 50%");
    }
}

cliente(18)