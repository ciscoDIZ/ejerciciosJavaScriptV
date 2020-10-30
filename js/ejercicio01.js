function CuentaBancaria(nombreTitular,apellidosTitular,saldo){

        this.nombreTitular = nombreTitular;
        this.apellidosTitular = apellidosTitular;
        this.saldo = saldo;
        this.mostrarDatos = function (){
            return "nombre titular "+this.nombreTitular+" "+this.apellidosTitular+
                "\nsaldo: "+this.saldo;
        }
}
let nombre = prompt("introducir nombre titular.");
let apellidos = prompt("introduicr apellidos titular");
let saldo = prompt("introducir saldo");
console.log("creado objeto"+ CuentaBancaria +"con los atributos; nombre titular: "+nombre+", apellidosTitular: "+apellidos+", saldo: "+saldo);
let cb = new CuentaBancaria(nombre,apellidos,saldo);

console.log(cb.mostrarDatos());