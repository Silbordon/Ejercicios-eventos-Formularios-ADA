// EJERCICIO 1 
// Kilómetros a Millas
// Crear una página que:

// Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
// Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que 
// 1 ki´lómetro es 0.62 millas, 
// 1 milla es 1.61 kilómetros.

// const kilometros = document.getElementById('kilometros');
// const millas = document.getElementById('millas');
// const resultados = document.getElementById('resultado');

// kilometros.addEventListener('keyup', ()=>{
//     let valueKilometros = (kilometros.value)*0.62;
// millas.value = valueKilometros;

// })

// millas.addEventListener('keyup', ()=>{
//     let valueMillas = (millas.value)*1.61;
// kilometros.value = valueMillas;

// })





// RGB EJERCICIO 2
// Crear una página que:
// Tenga tres inputs numéricos, con valor mínimo 0 y valor máximo 255, uno para el valor R (red), otro para el valor G (green) y otro para el valor B (blue).
// Todos los inputs comiencen con el valor 255.
// Cuando se modifica algún input, se cambie el color de fondo del body con el color que se forma a partir de dichos valores.


// const colorRed = document.getElementById('color-red')
// const colorGreen = document.getElementById('color-green');
// const colorBlue = document.getElementById('color-blue');

// let rojo = colorRed.value;
// let verde = colorGreen.value;
// let azul = colorBlue.value;

// colorRed.addEventListener('change', (e)=>{
//     rojo = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });
// colorGreen.addEventListener('change', (e)=>{
//     verde = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });
// colorBlue.addEventListener('change', (e)=>{
//     azul = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });




// EJERCICIO 3 
// Todo
// Crear una página que:
// Tenga un input, un botón que diga Crear todo y una lista.
// Al presionar el botón, si el input no está vacío, se agregue un ítem a la lista con el contenido del input y se borre el contenido del input.

// const texto = document.getElementById('texto');
// const crear = document.getElementById('crear');
// const lista = document.getElementById('lista');

// crear.addEventListener('click', ()=> {
//     if(texto.value !== ''){
//         const li = document.createElement('li');
//         li.innerHTML = texto.value;
//         lista.appendChild(li);
//         texto.value = '';
//     }
// })




// EJERCICIO 4
// Agregar imágenes
// Crear una página que:
// Tenga un input para la url de la imagen, un botón que diga Agregar imagen y un contenedor flexible donde mostrar imágenes como en una grilla.
// Al presionar el botón, si el input no está vacío, se agregue una imagen al contenedor cuyo src es el contenido del input y se borre el contenido del input.
// Al hacer click en una imagen, esta se elimine.


// const agregar = document.getElementById('agregar');
// const imagen = document.getElementById('imagen');
// const contenedorFlexible = document.getElementById('contenedor-flexible');
// const imagenDescarte = document.getElementsByClassName('nuevo');



// agregar.addEventListener('click', () => {
//     if (imagen.value !== '') {
//         const img = document.createElement('img');
//         const src = imagen.value
//         img.classList.add('nuevo');
//         img.setAttribute('src', src)
//         contenedorFlexible.appendChild(img);

//         imagen.value = '';
//     }
// })


// // window.addEventListener('click', (e)=>{
// //     if(e.target.classList.contains('nuevo'))
// //     e.target.style.display = 'none';
// // })


// window.addEventListener('click', (e) =>{
//     e.target.classList.contains('nuevo') ? e.target.style.display = 'none' : null;
// })




// EJERCICIO 5
// Comentario
// Crear una página que:

// Tenga un textarea, un texto pequeño debajo de este y un botón que diga Enviar.
// El texto comience diciendo 0/240 caracteres.
// Cuando se escribe algo en el textarea, se actualice el texto para reflejar la cantidad de caracteres restantes.
// Al presionar el botón, si hay 240 caracteres o menos, se borre el contenido del input y se actualice el texto para que diga Comentario enviado.
// El color del borde del textarea cambie de la siguiente forma:
// normal si está vacío
// verde si tiene texto y 240 caracteres o menos
// rojo si tiene más de 240 caracters

// const texto = document.getElementById('texto');
// const caracteres = document.getElementById('caracteres');
// const enviar = document.getElementById('enviar');
// let contador = 0;


// texto.addEventListener('keyup', () => {
//     contador = texto.value.length;
//     caracteres.innerHTML = `${contador}/240 caracteres`;
//     if(contador <= 240){
//         texto.style.border = '3px solid green'
//     } else{
//         texto.style.border = '3px solid red'
//     };
// })


// enviar.addEventListener('click', () => {
//     if (contador <= 240) {
//         texto.value = '';
//         caracteres.innerHTML = `Comentario Enviado`;
//         texto.style.border = 'none';  
//     }else{
//         caracteres.innerHTML = `Tu mensaje es muy extenso`
//     }
// })






// EJERCICIO 6
// Conversor avanzado
// Crear una página que:

// Tenga
// un input para ingresar el valor a convertir
// un select para seleccionar la unidad del valor convertido
// un select para seleccionar la unidad a convertir
// un botón que diga Intercambiar
// un texto que muestre el resultado
// Cuyos selects tengan las siguientes opciones:
// Kilómetros (km)
// Metros (m)
// Decímetros (dm)
// Centímetros (cm)
// Milímetros (mm)
// Ambos select comiencen con la opción metros seleccionada y el input comience con el valor 1.
// Al seleccionar una nueva opción en cualquiera de los select o al modificar el valor del input, se actualice el texto con el resultado de la conversión del valor ingresado de una unidad a la otra.
// Al clickear el botón Intercambiar se intercambien las opciones de los selects y se actualice el texto.

// TIP

// Para realizar este ejercicio, el value de cada option del select deben ser los siguiente:

// Para Kilómetros, el value debe ser 1000
// Para Metros, el value debe ser 1
// Para Decímetros, el value debe ser 0.1
// Para Centímetros, el value debe ser 0.01
// Para Milímetros, el value debe ser 0.001
// La conversión se realiza con la fórmula: VALOR_INGRESADO * VALOR_UNIDAD / VALOR_UNIDAD_A_CONVERTIR.


// let valorIngresado = document.getElementById('valorIngresado');
// let unidadIngresada = document.getElementById('unidadIngresada');
// let unidadConvertir = document.getElementById('unidadConvertir');

// const intercambiar = document.getElementById('intercambiar');
// const resultado = document.getElementById('resultado'); 

// let valor1 = 1;
// let valor2= 1;
// let valor3 = 1;

// valorIngresado.addEventListener('change', ()=>{
//     valor1 = valorIngresado.value;
//     let valor = (valor1* unidadIngresada.value)/(unidadConvertir.value); 
//     resultado.innerHTML = valor;
// })

// unidadIngresada.addEventListener('change', ()=>{
//     valor2 = unidadIngresada.value;
//     let valor = (valor1)*(valor2)/(unidadConvertir.value); 
//     resultado.innerHTML = valor;
// })

// unidadConvertir.addEventListener('change', ()=>{
//     valor3 = unidadConvertir.value;
//     let valor = (valor1)*(valor2)/(valor3); 
//     resultado.innerHTML = valor;
// })


// intercambiar.addEventListener('click', ()=>{
//  let cambio = unidadConvertir.value;
//  unidadConvertir.value = unidadIngresada.value;
//  unidadIngresada.value = cambio;

//  let valor = valorIngresado.value * (cambio)/(unidadConvertir.value); 

//  resultado.innerHTML = valor;
// })





// EJERCICIO 7

// Card dinámica
// Crear una página que:

// Tenga un input para la url de la imagen, un input para el título, un textarea para la descripción, un input para la url externo y un checkbok que diga Link externo
// Tenga una card simple y estilizada con: imagen, título, descripción, y un link que diga Ver más.
// A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
// Si el checkbox no está seleccionado, el link Ver más no se muestre y el input de la url externa se deshabilite.
// Si el checkbox está seleccionado, el link Ver más se muestre y el input de la url externa se habilite.

// const urlImagen = document.getElementById('urlImagen');
// const img = document.getElementById('img');
// const tituloImagen = document.getElementById('titulo');
// const tituloCard = document.getElementById('tituloCard')
// const descripcion = document.getElementById('descripcion');
// const texto = document.getElementById('texto');
// const urlExterna = document.getElementById('urlExterna');
// const check = document.getElementById('check');
// const linkCheck = document.getElementById('linkCheck');

// urlImagen.addEventListener('change', ()=>{
//     let src = urlImagen.value;
//     img.setAttribute('src', src);
// })

// titulo.addEventListener('keyup', () =>{
//     let titulo = tituloImagen.value;
//     tituloCard.innerHTML = titulo;
// })

// descripcion.addEventListener('keyup', () =>{
//     let textoDescripcion = descripcion.value;
//     texto.innerHTML = textoDescripcion;
// })


// check.addEventListener('click', ()=>{
//     if (check.checked){
//         urlExterna.removeAttribute('disabled');
//         linkCheck.style.display ='block';
//     } else {
//         let disabled = 'disabled';
//         urlExterna.setAttribute('disabled', disabled);
//         linkCheck.style.display = 'none'
//     }
// })

// urlExterna.addEventListener('change' , ()=>{
//     const href = urlExterna.value;
//     linkCheck.setAttribute('href', href);
// })





// EJERCICIO 8
// Selector de imágenes
// Crear una página que:

// Tenga un select con categorías de imágenes (por ejemplo, animales, comida, paisajes, etc) y un contenedor con al menos 9 imágenes correspondientes a las distintas categorías, mostradas como grilla.
// El select tenga la opción Todas y comience con dicha opción seleccionada.
// Al seleccionar una nueva opción en el select se oculten aquellas imágenes que no pertecen a la categoría seleccionada y se muestren las que sí.
// Al seleccionar Todas se muestren todas las imágenes.
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del option de la categoría correspondiente.

// const categoriaImagen = document.getElementById('categoriaImagen');
// let img = document.getElementsByTagName('img');

// categoriaImagen.addEventListener('change', () => {
//     let categoria = categoriaImagen.value;

//     for (let i = 0; i < img.length; i++) {
//         let data = img[i].getAttribute('data-categoria');

//         if (categoria !== data) {
//             img[i].style.display = 'none'
//         } else if (categoria === data) {
//             img[i].style.display = 'block'
//         }

//         if (categoria === 'todas') {
//             img[i].style.display = 'block'
//         };
//     };
// })





// EJERCICIO 9
// Buscador
// Crear una página que:

// Tenga un input y un contenedor con al menos 9 imágenes mostradas como grilla y un texto para mostrar la cantidad de resultados encontrados.
// Al escribir algo en el input aquellas imágenes cuyo alt contiene parte o todo el texto ingresado se muestran, mientras las demás se ocultan.
// La búsqueda ignora mayúsculas y minúsculas.
// Al vaciar el input, se muestran todas las imágenes.
// Al realizar la búsqueda se actualiza el texto con la cantidad de imágenes que se están mostrando, de modo que diga, por ejemplo, 3 resultados encontrados.

// Por ejemplo, si una imagen tiene un alt que dice Oso koala comiendo eucaliptus y se busca ko dicha imagen debe mostrarse.

// const buscador = document.getElementById('buscador');
// const img = document.getElementsByTagName('img');
// let resultado = document.getElementById('resultado');




// buscador.addEventListener('keyup', ()=>{
//     let palabra = (buscador.value).toLowerCase();

//         for (let index = 0; index < img.length; index++) {
//             let imgVer = img[index];
//             let alt = img[index].getAttribute('alt');
//             alt.includes(palabra.toLowerCase()) ? imgVer.classList.add('destacar') : imgVer.classList.add('none');

//             if (palabra == ''){
//                 imgVer.classList.remove('none');
//                 imgVer.classList.remove('destacar');
//             }
//         }
// })




// const buscador = document.getElementById('buscador');
// const img = document.getElementsByTagName('img');
// let resultado = document.getElementById('resultado');


// buscador.addEventListener('keyup', (e) => {
//     let palabra = (buscador.value).toLowerCase();

//     let contador = 0;

//     for (let index = 0; index < img.length; index++){

//         let imgVer = img[index];
//         let alt = img[index].getAttribute('alt');

//         if (alt.includes(palabra.toLowerCase())) {
//             imgVer.classList.add('destacar');
//            contador = contador + 1;

//         } else {
//             imgVer.classList.add('none')
//         };

//         if (palabra == '') {
//             imgVer.classList.remove('none');
//             imgVer.classList.remove('destacar');
//             contador = 0;
//         }
//     }
//     resultado.innerHTML = contador;
// })




// EJERCICIO 10
// Filtro de imágenes
// Crear una página que:
// Tenga una grilla de imágenes y al menos 4 checkbox con categorías (por ejemplo, animales, comida, paisajes, etc).
// Al seleccionar un checkbox se actualice la grilla, mostrando aquellas imágenes que pertenezcan a las categorías seleecionadas.
// Al deseleccionar todos los checkbox se muestren todas las imágenes
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del checkbox de la categoría correspondiente.

// const generoTerror = document.getElementById('generoTerror');
// const generoComedia = document.getElementById('generoComedia');
// const generoSuspenso = document.getElementById('generoSuspenso');
// const generoCienciaFiccion = document.getElementById('generoCienciaFiccion');
// const img = document.getElementsByTagName('img');


// con 2 for anidados
// for(let i = 0; i < img.length; i++) {
//     for(let index = 0; index < checkBox.length; index ++){
//         checkBox[index].addEventListener('click', (e)=>{
//             if(checkBox[index].checked){
//                 if(img[i].getAttribute('data-categoria') == checkBox[index].value){
//                     img[i].style.display = 'inline';
//                 }
//                 if(img[i].getAttribute('data-categoria') !== checkBox[index].value){
//                     img[i].style.display = 'none';
//                 }
//             } else{
//                 img[i].style.display = 'inline'
//             }    
//         })
//     }
// }



// Con 1 solo for
// for (let i = 0; i < img.length; i++) {

//     generoCienciaFiccion.addEventListener('click', (e) => {
//         if (generoCienciaFiccion.checked) {
//             if (img[i].getAttribute('data-categoria') == generoCienciaFiccion.value) {
//                 img[i].style.display = 'inline';

//             }
//             if (img[i].getAttribute('data-categoria') !== generoCienciaFiccion.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }
//     })


//     generoComedia.addEventListener('click', (e) => {
//         if (generoComedia.checked) {
//             if (img[i].getAttribute('data-categoria') == generoComedia.value) {
//                 img[i].style.display = 'inline';


//             }
//             if (img[i].getAttribute('data-categoria') !== generoComedia.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })

//     generoTerror.addEventListener('click', (e) => {
//         if (generoTerror.checked) {
//             if (img[i].getAttribute('data-categoria') == generoTerror.value) {
//                 img[i].style.display = 'inline';

//             }
//             if (img[i].getAttribute('data-categoria') !== generoTerror.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })


//     generoSuspenso.addEventListener('click', (e) => {
//         if (generoSuspenso.checked) {
//             if (img[i].getAttribute('data-categoria') == generoSuspenso.value) {
//                 img[i].style.display = 'inline';

//             }
//             if (img[i].getAttribute('data-categoria') !== generoSuspenso.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })
// }


// for (let i = 0; i < img.length; i++) {

//     generoCienciaFiccion.addEventListener('click', (e) => {
//         if (generoCienciaFiccion.checked) {
//             if (img[i].getAttribute('data-categoria') == generoCienciaFiccion.value) {
//                 img[i].style.display = 'inline';
//                 console.log(cifi)

//             }
//             if (img[i].getAttribute('data-categoria') !== generoCienciaFiccion.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }
//     })


//     generoComedia.addEventListener('click', (e) => {
//         if (generoComedia.checked) {
//             if (img[i].getAttribute('data-categoria') == generoComedia.value) {
//                 img[i].style.display = 'inline';


//             }
//             if (img[i].getAttribute('data-categoria') !== generoComedia.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })


//     generoTerror.addEventListener('click', (e) => {
//         if (generoTerror.checked) {
//             if (img[i].getAttribute('data-categoria') == generoTerror.value) {
//                 img[i].style.display = 'inline';

//             }
//             if (img[i].getAttribute('data-categoria') !== generoTerror.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })


//     generoSuspenso.addEventListener('click', (e) => {
//         if (generoSuspenso.checked) {
//             if (img[i].getAttribute('data-categoria') == generoSuspenso.value) {
//                 img[i].style.display = 'inline';

//             }
//             if (img[i].getAttribute('data-categoria') !== generoSuspenso.value) {
//                 img[i].style.display = 'none';
//             }
//         } else {
//             img[i].style.display = 'inline'
//         }

//     })
// }




// EJECICIO 11 
// Feedback (Validación)
// Debemos crear una encuesta de satisfacción al cliente para un portal de ventas basado en 4 preguntas que nos determinará qué tan contento está el cliente con nuestro servicio. Las respuestas deben ser radio buttons y cada grupo responderá a una pregunta específica.

// ¿Qué tan rápido solucionamos tu problema?

// Demoraron mucho
// Lo recibí en el tiempo estimado
// Super rápido
// ¿Como recibiste el producto?

// Tuvo un desperfecto
// Era tal cual la publicación
// Superó mis expectativas
// ¿Cómo calificarías el asesoramiento de nuestros representantes?

// No supo responder adecuadamente mis preguntas
// El representante respondió adecuadamente
// Recibí un excelente asesoramiento
// ¿Recomendarías nuestro portal a otro usuario?

// No lo creo
// Solo para casos puntuales
// ¡Si, por supuesto!
// Una vez que obtengamos las respuestas mostraremos con una alerta el nivel de satisfacción con nuestro servicio, siendo que:

// Las respuestas negativas tendrán un valor de 1
// Las respuestas neutras un valor de 2
// Mientras que las respuestas positivas un valor de 3.
// Por lo que el resultado deberá corresponder al siguiente para el puntaje total:

// 4: Sumamente insatisfecho
// 5-6: Insatisfecho
// 6-8: Conforme
// 8-10: Satisfecho
// 11-12: Muy satisfecho

// const opcion = document.getElementsByTagName('input');
// const pregunta1 = document.getElementsByClassName('pregunta1');
// const pregunta2 = document.getElementsByClassName('pregunta2');
// const pregunta3 = document.getElementsByClassName('pregunta3');
// const pregunta4 = document.getElementsByClassName('pregunta4');
// let valuePregunta1;
// let valuePregunta2;
// let valuePregunta3;
// let valuePregunta4;
// let valueTotal;

// const sumaValores = (valueTotal) => {
//     if(valueTotal === 4){
//         return alert('Sumamente insatisfecho');
//     } else if(valueTotal >= 5 && valueTotal <= 6){
//         return alert('Insatisfecho');
//     } else if(valueTotal > 6 && valueTotal <= 8){
//         return alert('Conforme');
//     } else if(valueTotal > 8 && valueTotal <= 10){
//         return alert('Satisfecho');
//     } else if(valueTotal > 10 && valueTotal <= 12){
//         return alert('Muy satisfecho');
//     }
// };

// for(let i = 0; i < pregunta1.length; i ++){
//     pregunta1[i].addEventListener('change', ()=>{
//         valuePregunta1 = parseInt(pregunta1[i].value);
//            valueTotal = valuePregunta1;
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta2.length; i ++){
//     pregunta2[i].addEventListener('change', ()=>{
//         valuePregunta2 = parseInt(pregunta2[i].value);
//         valueTotal += valuePregunta2;
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta3.length; i ++){
//     pregunta3[i].addEventListener('change', ()=>{
//         valuePregunta3 = parseInt(pregunta3[i].value);
//         valueTotal += valuePregunta3;
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta4.length; i ++){
//     pregunta4[i].addEventListener('change', ()=>{
//         valuePregunta4 = parseInt(pregunta4[i].value);
//         valueTotal += valuePregunta4;
//         setTimeout(()=>{
//             sumaValores(valueTotal);
//         },200)
//     })
// }




// Opcion con forEach
// Array.from(opcion).forEach(input=>{
//     input.addEventListener('change', (e)=>{
//         const atributo = input.getAttribute('name')
//         if (atributo === 'pregunta1'){
//             let resp1 = parseInt(input.value);
//             contador += resp1;
//         }
//         if (atributo === 'pregunta2'){
//             let resp2 = parseInt(input.value);
//             contador += resp2;
//         }
//         if (atributo === 'pregunta3'){
//             let resp3 = parseInt(input.value);
//             contador += resp3;
//         }
//         if (atributo === 'pregunta4'){
//             let resp4 = parseInt(input.value);
//             contador += resp4;
//         } 
//     })
// })





// EJERCICIO 12
// Tarjeta de crédito (Validación)
// Realizaremos una validación sobre el formulario del ejercicio Pago.

// Aplicaremos las siguientes validaciones:

// Paso 1: Campo del número de la tarjeta de crédito.

// El campo debe tener 16 caracteres. Al salirse del foco de este input, y en el caso de no cumplir con este requerimiento, el input debe colorearse de rojo, le mostraremos un mensaje de error que la tarjeta debe contener 16 caracteres y borraremos el contenido el input.
// Adicionaremos un input de tipo selector con 2 opciones. Visa y Mastercard. Esto no debe estar disponible para la edición del usuario, pero aplicaremos un cambio dada la siguiente condición: Si el número ingresado por el usuario inicia con 5. Será Mastercard, si comienza con 3 o 4 será visa. Y si inicia con otro valor mostraremos un mensaje de error indicando el número ingresado es erróneo.

// Paso 2: Campo nombre.

// Validar que el campo de nombre posea solo texto. Lo validaremos con una regex.

// Paso 3: CCV.

// Validar que solo posea solo números
// Que su contenido sea 3 caracteres en el caso de visa y 4 en el caso de mastercard. Por lo que habilitaremos esta opción una vez haya completado correctamente el campo numérico.

// En el Paso 1: Usaremos blur y change

// Mientras que las validaciones del Paso 2 y Paso 3 las haremos antes de intentar enviar el formulario.

// const numeroTarjeta = document.getElementById('numero-tarjeta');
// const errorTarjeta = document.getElementById('error-tarjeta');
// const errorNumero = document.getElementById('error-numero');


// const tipoTarjeta = document.getElementById('tipo');
// const nombre = document.getElementById('nombre');
// const ccv = document.getElementById('ccv');



// const regExNombre = /^([A-Z a-z]+[\s]*)+$/;
// const regExNumero = /^([0-9]*)+$/;



// numeroTarjeta.addEventListener('blur', () => {
//     if (numeroTarjeta.value.length < 16) {
//         numeroTarjeta.style.border = '1px solid red';
//         errorTarjeta.innerHTML = `El número debe contener 16 caracteres`
//         numeroTarjeta.value = '';
//     } else {
//         numeroTarjeta.style.border = '1px solid green';
//         errorTarjeta.innerHTML = '';
//     }
// });


// numeroTarjeta.addEventListener('change', () => {
//     let valor = numeroTarjeta.value;
//     if (valor.length === 16) {
//         valor = valor.slice(0,1);
//         console.log(valor);
//         if (valor === '5') {
//             tipoTarjeta.value = '2';
//             ccv.setAttribute('minlength', '4');
//             ccv.setAttribute('maxlength', '4');
//         } else if (valor === '3' || valor === '4') {
//             tipoTarjeta.value = '1';
//             ccv.setAttribute('minlength', '3');
//             ccv.setAttribute('maxlength', '3');
//         } else {
//             errorNumero.innerHTML = `Numero de tarjeta invalido`;
//         }
//     }
// })

// nombre.addEventListener('keyup', () => {
//     const valorNombre = nombre.value;
//     const comprobarNombre = regExNombre.test(valorNombre);
//     if (comprobarNombre === true) {
//         nombre.style.border = '1px solid green'
//     } else {
//         nombre.style.border = '1px solid red'
//     }
// })

// ccv.addEventListener('keyup', () => {
//     const ccvValue = ccv.value;
//     const comprobarCcv = regExNumero.test(ccvValue);
//     console.log(comprobarCcv);
//     if (comprobarCcv === true) {
//         ccv.style.border = '1px solid green'
//     } else {
//         ccv.style.border = '1px solid red'
//     }
// })





// EJERCICIO 13
// Registro (Validación)
// Antes de enviar el formulario de registro de cliente creado con anterioridad, realizaremos algunas validaciones sobre este. Pero primero, agregaremos una etiqueta small debajo de cada input con un color rojo y de inicio no va a visualizarse.

// Los errores y las validaciones a mostrar deben ser las siguientes:

// Nombre: "El campo nombre solo puede contener texto"
// Apellido: "El campo apellido solo puede contener texto"
// DNI: "El DNI no puede ser mayor a 8 caracteres"
// Email: "El formato del email no es válido"
// Contraseña: En este caso utilizaremos 2. "La contraseña debe tener al menos 8, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial" y "Las contraseñas no coinciden"
// Términos y condiciones de uso: "Debe aceptar los términos y condiciones"
// En el caso de que alguno de los inputs no cumpla con las características solicitadas, debemos visualizar el error correspondiente a ese input.

// let valorPassword  ;
// const small = document.getElementsByTagName('small');
// const check = document.getElementById('checkbox');



// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
// const dni = document.getElementById('dni');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password-2');
// const boton = document.getElementById('boton');


// // Expresiones regulares para validaciones
// const validadEmail = (email) => {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return regex.test(email.toLowerCase());
//   }
  

// const validarPassword = (password) => {
//     const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
//     return regex.test(password)
//   }



// const validarTexto = (texto) => {
//     const regExNombre = /^([A-Z a-z]+[\s]*)+$/;
//     return regExNombre.test(texto);
// };



// const validarNumero = (numero) => {
//    const regExNumero = /^([0-9]*)+$/;
//     return regExNumero.test(numero);
// };


// nombre.addEventListener('keyup', () => {
//     const valorNombre = nombre.value;
//     const valorValidacionNombre = validarTexto(valorNombre);
//     if (valorNombre.length > 0) {
//         if (valorValidacionNombre === true) {
//             nombre.style.border = '1px solid green'
//             small[0].innerHTML = '';

//         } else {
//             nombre.style.border = '1px solid red'
//             small[0].innerHTML = `El campo solo puede contener texto`;
//         }
//     } else {
//         nombre.style.border = '1px solid black';
//         small[0].innerHTML = '';
//     }
// });



// apellido.addEventListener('keyup', () => {
//     const valorApellido = apellido.value;
//     const valorValidacionApellido = validarTexto(valorApellido);
//     if (valorApellido.length > 0) {
//         if (valorValidacionApellido === true) {
//             apellido.style.border = '1px solid green'
//             small[1].innerHTML = '';
//         } else {
//             apellido.style.border = '1px solid red'
//             small[1].innerHTML = `El campo solo puede contener texto`;
//         }
//     } else {
//         apellido.style.border = '1px solid black';
//         small[1].innerHTML = '';
//     }
// });



// dni.addEventListener('keyup', () => {
//     const valorDni = dni.value;
//     const valorValidacionDni = validarNumero(valorDni);

//     if (valorDni.length > 0) {
//         if (valorValidacionDni === true && valorDni.length == 8) {
//             dni.style.border = '1px solid green'
//             small[2].innerHTML = '';

//         } else {
//                 dni.style.border = '1px solid red'
//                 small[2].innerHTML = `El campo debe contener 8 numeros`;
//         }

//     } else {
//         dni.style.border = '1px solid black';
//         small[2].innerHTML = '';
//     }
// });



// email.addEventListener('keyup', ()=>{
//     const valorEmail = email.value;
//     const validacionEmail = validadEmail(valorEmail);
//     if (valorEmail.length > 0){
//         if (validacionEmail === true){
//             email.style.border = '1px solid green'
//             small[3].innerHTML = '';
//         } else{
//             email.style.border = '1px solid red'
//             small[3].innerHTML = `El campo de email no tiene el formato correcto`;  
//         };
//     } else{
//         email.style.border = '1px solid black';
//         small[3].innerHTML = '';
//     }
// })


// password.addEventListener('change', ()=>{
//     valorPassword = password.value;
//     const validacionPassword = validarPassword(valorPassword);
//     if(valorPassword.length>0){
//         if (validacionPassword===true){
//             password.style.border = '1px solid green'
//         } else{
//             password.style.border = '1px solid red'
//             small[4].innerHTML = `La contraseña debe tener al menos 8, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial`;  
//     } }else{
//         password.style.border = '1px solid black';
//         small[4].innerHTML = ''; 
//     }

//     });


// password2.addEventListener('change', () =>{
//     const valorPassword2 = password2.value;
//         if(valorPassword2 === valorPassword){
//             password2.style.border = '1px solid green'
//             small[5].innerHTML = '';  
//         } else{
//             password2.style.border = '1px solid red'
//             small[5].innerHTML = `La contraseña no es igual a la anterior`; 
//     } 
//     });


// boton.addEventListener('click', ()=>{
//     if(check.checked === false){
//         small[6].innerHTML = `Debe aceptar las condiciones`
//     }
// });


// check.addEventListener('click', ()=>{
//         small[6].innerHTML = '';

// })