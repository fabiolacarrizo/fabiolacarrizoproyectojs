/*
let productoa = ["a", "Ajuares", 1200];
let productob = ["b", "Baberos", 1200];
let productoc = ["c", "Zapatos", 1200];
let productod = ["d", "Media", 1200];

let bienvenida = alert("Bienvenidos a BBSunshine. Tenemos todo en indumentaria para tu adorado bebe Indicanos si quieres saber nuestros precios");

let opciones= prompt("Nuestro productos disponibles son a) ajuares b) baberos c) zapatos d) medias. Indiquenos cual necesita escribiendo la letra referente al producto");


if (opciones === "a") { alert(productoa)
}
else if (opciones === "b") {alert(productob)
} else if(opciones === "c") {alert(productoc)
}else if(opciones === "d") {alert(productod)
}
else {alert ("No tenemos disponible esa opcion, esperamos poder ayudarle en una proxima ocasion");}

let cantidad= prompt("cuantos necesita") ;

let resultado = (cantidad * 1200);

let compra= alert(`Su compra fue procesada con exito, el total a cancelar es= ${resultado}`);

*/

const productos =[
    {img:"" ,nombre: "Ajuar", talle: 2 , color: "blanco", precio: 1000, id:1},
    {img:"" ,nombre:"ajuar" , talle: 1, color:"rosa" , precio:1000, id:2 },
    {img:"" ,nombre:"babero", talle: "Sin talla", color: "Azul", precio:250, id:3 },
    {img:"" ,nombre:"medias" , talle: "sin talle", color:"Varios" , precio:250, id:4},
];


export{productos};