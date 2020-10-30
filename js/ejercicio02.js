function Persona(nombre,apellidos,edad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
}

let isTajetaPuntos = false;
let paises = new Set();

Persona.prototype = paises;
Persona.prototype = isTajetaPuntos;

function AgenciaViajes(nombre,codigo){
    this.nombre = nombre;
    this.codigo = codigo;
    this.clientes= new Map();
    this.crearViajero = function (cliente) {
        if (cliente instanceof Persona) {
            let codCliente = this.codigo + cliente.nombre.substring(0, 3) +
                cliente.apellidos.substring(0, 3);
            if(!this.clientes.has(codCliente)) {
                this.clientes.set(codCliente, cliente);
            }
        }
    }
    this.mostrarViajeros = function (){
        for (const argumentsKey : this.clientes.keys()) {

        }
    }
}
