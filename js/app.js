//VARIABLES

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');


//LISTENERS

eventListeners();
function eventListeners(){
    cursos.addEventListener('click', agregarCarrito);
    listaCursos.addEventListener('click', eliminarCarrito);
}


//FUNCIONES
//Seleccionar curso (1)er paso para agregarlo al carrito
function agregarCarrito(e){
    e.preventDefault();
    // Delegation para seleccionar el curso a traves de su className
    if(e.target.classList.contains('agregar-carrito'))
    {
        const curso = e.target.parentElement.parentElement;
        //Llamamos a la funcion que lee todos los datos del curso
        leerDatosCurso(curso);
    }
}
// Leer datos curso

function leerDatosCurso(curso){

    const infoCurso={
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarCarrito(infoCurso);
}

//Insertar curso al carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML=
    `
    <td> 
        <img src="${curso.imagen}">
    </td>
    <td> ${curso.titulo} </td>
    <td> ${curso.precio} </td>
    <td> <a href=# class="borrar-curso" data-id= ${curso.id}> X </a> </td>
    
    `
    listaCursos.appendChild(row);
}

// Eliminar cursos del carrito

function eliminarCarrito(e){
    e.preventDefault();
    console.log(e.target.getAttribute('data-id'));
    
}
