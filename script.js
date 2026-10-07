var dato = "hola";

console.log(dato);

//asi se hacenlas clases en javascript

class persona{

    //atributos
    colorpelo;
    colorojos;
    estatura;
    nombre;

    //metodos
    comer(){
        console.log("comiendo...");
    }

    caminar(){
        return "caminando...";
    }
}

var lucas = new persona();

var braian = new persona();

lucas.nombre ="lucas";
lucas.estatura = 1.75;
lucas.comer();
console.log(lucas.caminar());
console.log(lucas);