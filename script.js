function averiguarDolar () {
    //En un futuro me gustaria poder usar una API para conseguir el valor del dolar a tiempo real.
    var dolarHoy = 188;
    return dolarHoy;
}

function ingresarDolares (){
    let usd = prompt("Ingrese la cantidad de dolares que desea convertir:");
    return usd;
}

function convertir (precioDolar, dolares){
    let conversion = precioDolar * dolares;
    return conversion;
}

var seguir = true;
alert("Hola! Bienvenid@ al conversor de dolares a pesos de Nicolas Arcusin");

while(seguir){
    var dolares = ingresarDolares();
    var precioDolar = averiguarDolar();
    var resultado = convertir(precioDolar, dolares);
    alert(dolares +" dolares son " + resultado + " pesos.");
    do {
        var respuesta = prompt("Desea hacer otra conversion? y/n");
        if(respuesta == "y"){
            seguir = true;
            break;
        }
        else if(respuesta == "n"){
            seguir = false;
            break;
        }
    } while (respuesta != 'y' && respuesta!= 'n');
}

alert("Muchas gracias por usar mi conversor de dolares a pesos, que tenga un buen dia");




