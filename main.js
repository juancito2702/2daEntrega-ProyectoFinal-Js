// JUAN LUIS SILVA RIOS
//2DA ENTREGA DE MI PROYECTO FINAL----------------------------------------------------------------------------------


//IMPLEMENTACIÓN DEL JSON Y STORAGE PARA GUARDAR EL NOMBRE DEL USUARIO QUE ME VISITA----------------------------------

let nombre = localStorage.getItem("nombre");
if (nombre == null) {
    nombreSolicitado = prompt("BIENVENIDO A MI WEB SITE DE ADHESIVOS Y SELLANTES. ¿CÓMO TE LLAMAS?");
    localStorage.setItem("nombre", nombreSolicitado);
} else {
    Swal.fire({
        title: 'UN GUSTO SALUDARTE: ' + nombre,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}


//GUARDANDO EN EL LOCAL STORAGE MI LISTA DE TOP5 DE LOS PORDUCTOS MÁS VENDIDOS----------------------------------------------

class adhesivosTop5 {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

const h1 = new adhesivosTop5("Sikaflex 11 fc", "32");
const h2 = new adhesivosTop5("Soudal fix All", "41");
const h3 = new adhesivosTop5("Topex Clavos", "14");
const h4 = new adhesivosTop5("Soldimix ultra", "9");
const h5 = new adhesivosTop5("SikaBoom", "120");

const arraytop5 = [];
arraytop5.push(h1, h2, h3, h4, h5);
console.log(arraytop5);

localStorage.setItem("listatop5", JSON.stringify(arraytop5));



//RECUPERANDO MI ARRAY DE PRODUCTOS TOP5 DEL LOCAL STORAGE--------------------------------------------------------------

let recuperarArrayTop5 = JSON.parse(localStorage.getItem("listatop5"));
console.log(recuperarArrayTop5);



//MODIFICACIÓN DE LAS OPCIONES EN MI BOTONERA ORIGINAL.......................................

let ventana = document.getElementsByTagName("a");
ventana[0].innerText = "Inicio";
ventana[1].innerText = "Soudal";
ventana[2].innerText = "Topex";
ventana[3].innerText = "PRODUCTOS TOP 10";
ventana[4].innerText = "Soldimix";
ventana[5].innerText = "JuancitoWeb";
ventana[6].innerText = new Date().toLocaleString();



// MI ARRAYS DE PRODUCTOS MÁS VENDIDOS------------------------------------------------------------------------------

const adhesivos = [{ id: 1, nombre: "SIKAFLEX 118", precio: 32 },
    { id: 2, nombre: "SOUDAL FIX ALL", precio: 41 },
    { id: 3, nombre: "PEGAMENTO TOPEX", precio: 90 },
    { id: 4, nombre: "SANISIL AC", precio: 27 },
    { id: 5, nombre: "SIKABOOM ESPUMA", precio: 120 },
    { id: 6, nombre: "SIKA CRYSTAL CLEAR", precio: 35 },
    { id: 7, nombre: "SIKA 227 AUTOMOTRIZ", precio: 40 },
    { id: 8, nombre: "TOPEX CLAVOS", precio: 14 },
    { id: 9, nombre: "SOLDIMIX ULTRAFUERTE", precio: 9 },
];
let carritoDeCompras = [];

//TÍTULO DEL TOTAL POR LAS COMPRAS DE SILICONAS--------------------------------------------------------------------

let totalSiliconas = document.createElement("h1");
totalSiliconas.innerText = "El total por tu compra es: (Soles Peruanos):";
document.body.appendChild(totalSiliconas);


let totalSoles = document.createElement("h2");
document.body.appendChild(totalSoles);
totalSoles.innerText = "0";


//TÍTULO PARA EL TOTAL DE UNIDADES COMPRADAS------------------------------------------------------------------------


let unidadesSiliconas = document.createElement("h1");
unidadesSiliconas.innerText = "Las Unidades de Siliconas que vas a comprar son:";
document.body.appendChild(unidadesSiliconas);

let totalUnidades = document.createElement("h2");
totalUnidades.innerText = "0";
document.body.appendChild(totalUnidades);



//CICLO FOR PARA MIS ADHESIVOS Y FUNCIÓN DE AGREGAR AL CARRITO-----------------------------------------------------

for (const adhesivo of adhesivos) {

    document.getElementById(`${adhesivo.id}`).onclick = () => agregarAlCarrito(`${adhesivo.id}`);
}

function agregarAlCarrito(id) {
    carritoDeCompras.push(adhesivos[id - 1]);
    console.log(carritoDeCompras);
    calcularTotalCarrito();
}


//BOTÓN PARA VACIAR MI CARRITO DE COMPRAS-------------------------------------------------------------------------

let botonVaciar = document.createElement("h4");
botonVaciar.setAttribute("id", "vaciar");
botonVaciar.innerText = "PRESIONA ..¡¡AQUÍ!!.. PARA VACIAR TU CARRITO DE COMPRAS.";
document.body.appendChild(botonVaciar);
botonVaciar.onclick = () => {
    carritoDeCompras = [];
    totalSoles.innerText = "0";
    totalUnidades.innerText = "0";
}
console.log(carritoDeCompras);

function calcularTotalCarrito() {
    let total = 0;
    for (const prod of carritoDeCompras) {
        total += prod.precio;
        console.log(total);
    }
    totalSoles.innerText = total;
    totalUnidades.innerText = carritoDeCompras.length;
}


//BOTÓN PARA FINALIZAR LA COMPRA DE MI CARRITO, USANDO LA LIBRERÍA DE JQUERY----------------------------------------------

$("#boton").prepend("<button class='btn btn-danger' onclick='finalizar();'>FINALIZAR COMPRA.</button>");

const finalizar = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'DIOS JESÚS TE BENDIGA =) Gracias por tu compra..!!!!',
        showConfirmButton: false,
        timer: 4500
    })
}