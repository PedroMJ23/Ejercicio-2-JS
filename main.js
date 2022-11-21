const pizzaInput = document.getElementById('pizza-Input')
const btn = document.getElementById('btn').addEventListener('click', mostrarpromo)
const h2 = document.getElementById('h2')
const h3 = document.getElementById('h3')
const title = document.getElementById('title')
const formElement = document.getElementById('form')




function cambioColor(){
    title.style.color= "blue";

}
title.style.color= "blue";

function alertaPrueba (){
    alert("AH!");
    return;

}



function mostrarpromo(e){
    e.preventDefault();
    const ID = document.querySelector('#pizza-Input').value; 
    const IdNumber = parseInt (document.querySelector('#pizza-Input').value);
    pizzas.forEach(pizza => {
        if (IdNumber === pizza.id){
            h2.textContent = `${pizza.nombre}`; 
            h3.textContent = `$${pizza.precio} ARS`;
        } else if (ID=== '' || ID === '0') 
        {h2.textContent = 'Error #1 en la selección'; 
        h3.textContent = 'Ningún valor ingresado';}
else if (ID > pizza.id) 
       {h2.textContent = 'Error #2 en la selección'; 
        h3.textContent = 'Ingrese un valor entre 1 y 6';}
    })

}


const pizzas = [
    {
        id:1,
        nombre: "Muzzarella",
        ingredientes:["Muzzarella","Tomates","Aceitunas"],
        precio: 590
    },
    {
        id:2,
        nombre:"Pizza Especial",
        ingredientes:["Muzzarella","Jamón","Aceitunas","Morrón Rojo"],
        precio: 900
    },
    {
        id:3,
        nombre:"Pizza Cuatro Quesos",
        ingredientes:["Muzzarella","Queso Azul", "Queso Parmesano", "Queso Provolone","Aceitunas"],
        precio: 1200

    },{
        id:4,
        nombre: "Pizza de Cebolla",
        ingredientes:["Muzzarella","Cebolla","Aceitunas"],
        precio: 1100
    },
    {
        id:5,
        nombre:"Pizza Calabresa",
        ingredientes:["Muzzarella","Salame","Aceitunas"],
        precio: 1300
    },
    {
        id:6,
        nombre:"Pizza Monstruo",
        ingredientes:["Muzzarella", "Jamón", "Cheddar", "Papas Fritas", "Morrón Rojo", "Cebolla de verdeo", "Aceitunas"],
        precio: 1800

    }
   
]
