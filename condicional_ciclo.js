let edad
let nuevoIntento



do {
    

    do {
        edad = prompt("Cual es tu edad?")

        if (isNaN(edad) || edad < 0)
            alert("Error");
        else if (edad >= 18) {
            alert("Sos mayor de edad")
        } else {
            alert("Sos menor de edad")
        }
    } while (isNaN(edad) || edad < 0)



    do {

        nuevoIntento = prompt("Queres intentarlo nuevamente? escribi si o no").toLowerCase();

        if (nuevoIntento !== "si" && nuevoIntento !== "no") {
            alert("Opcion no valida")
        }
        else if (nuevoIntento === "no") {
            alert("Hasta la proxima!")
        }

    } while (nuevoIntento !== "si" && nuevoIntento !== "no")



} while (nuevoIntento === "si")
