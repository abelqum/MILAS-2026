const hambMenu = document.getElementById('hamb');
const menuResp = document.getElementById('menu-resp');
const iconOpen = document.getElementById('iconHamb');
const iconClose = document.getElementById('iconClose');

hambMenu.addEventListener('click', () => {
  menuResp.classList.toggle('opacity-0');
  menuResp.classList.toggle('translate-x-full');

  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});




// //generador objetos imagenes codigo
// /*{
//         id: 1,
//         nombre: "Bomba Neumática 3:1",
//         marca: "SAMSON",
//         categoria: "Aceite",
//         tipo: "Bombas",
//         descripcion: "Ideal para distribución de aceite en distancias medias. Alta eficiencia.",
//         destacado: false, // SE MUESTRA EN INICIO
//         imagen: "./src/assets/img/SAMSON/bomba.png"
//     },*/

//     let cont=true;
//     let i=1;
//     let codFinal=[];
//      let arrTemp=[];
// do{


//  let [id,nombre,marca,categoria,tipo,descripcion,dest]=[i,prompt("Ingresa el nombre:"),prompt("Marca:"),prompt("Categotía:"),prompt("Tipo:"),prompt("Descripcion:"),prompt("Dest: 1.si 0.no")];
// let codTemp=`{
//         id: ${id},
//         nombre: "${nombre}",
//         marca: "${marca}",
//         categoria: "${categoria}",
//         tipo: "${tipo}",
//         descripcion: "${descripcion}",
//         destacado: ${dest=='1'?true:false}, // SE MUESTRA EN INICIO
//         imagen: "./src/assets/img/${marca}/${tipo}-${categoria}-${i}.webp"
//     }`;
//  arrTemp.push(codTemp);
//  i++;

//  let resp=prompt("Desea continiuar?: 1.si 0.no");
//  cont=resp=='1'?true:false;
// }while(cont==true);

// codFinal=arrTemp.join(',');
// console.log(codFinal);