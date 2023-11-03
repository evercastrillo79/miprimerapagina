//alert("Hola este es mi Javascript");
let nombre = "Ever";
const nombre1 ="Ever";

//console.log(nombre);
//console.log(nombre1);

let contenidoTitulo = "Marta";

let titulo = document.querySelector(".acerca")
titulo.innerHTML = contenidoTitulo;

//Condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}

//funciones

let nombre = "Miguel";
let ciudad = "Bogota";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo");

function nombredelafuncion(){

};

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Las Gaviotas. Me gusta la ${gusto} y jugar fútbol en días de sol. Me encantaría aprender a programar para poder ayduar a las personas a mostrar lo que hacen.`;
    
    return contenido

}



