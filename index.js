//mnipular un json desde js 
/*const persona={ 
    "nombre" : "sebas"
    ,"apellido": "ramos" 
    ,"hobies":["correr","comer","saltar"]
}

console.log(persona)
console.log(JSON.stringify(persona))//convierte en un objeto valido para json

console.log(JSON.stringify(persona.apellido))//convierte en un objeto valido para json

console.log(JSON.stringify(persona.hobies))//convierte en un objeto valido para json
*/
//manipular un .json

fetch('http://127.0.0.1:5500/personas.json').then((Response/*respuesta*/)=>Response.json()).then((personas)=>{
    const nombre=personas.map((personas)=>personas.nombre)
    console.log(nombre)
});
